import { Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '../store';
import { firebaseUrl } from '../url';
import {
  FETCH_SETTINGS_FAIL,
  FETCH_SETTINGS_START,
  FETCH_SETTINGS_SUCCESS,
  SettingsActionTypes,
  SettingsState,
  UserSettings,
} from './types';

export const fetchSettingsStart = (): SettingsActionTypes => {
  return {
    type: FETCH_SETTINGS_START,
  };
};

export const fetchSettingsSuccess = (
  payload: UserSettings
): SettingsActionTypes => {
  return {
    type: FETCH_SETTINGS_SUCCESS,
    payload,
  };
};

export const fetchSettingsFail = (): SettingsActionTypes => {
  return {
    type: FETCH_SETTINGS_FAIL,
  };
};

type AuthActionThunk = ThunkAction<
  void,
  RootState,
  unknown,
  SettingsActionTypes
>;

interface SettingsResponse {
  name: string;
  birthDate: string;
  gender: string;
  height: string;
  skill: number;
  city: string;
}

export const fetchSettings = (): AuthActionThunk => (dispatch, getState) => {
  dispatch(fetchSettingsStart());

  const token = getState().auth.token;
  fetch(`${firebaseUrl}/settings.json?auth=${token}`, {
    headers: { 'Content-Type': 'application/json' },
  })
    .then((res) => {
      if (!res.ok) throw Error();
      return res;
    })
    .then((res) => res.json())
    .then((res: SettingsResponse) => {
      dispatch(
        fetchSettingsSuccess({
          name: res.name,
          birthDate: new Date(res.birthDate),
          gender: res.gender,
          height: res.height,
          skill: res.skill,
          city: res.city,
        })
      );
    })
    .catch((_err) => {
      dispatch(fetchSettingsFail());
    });
};
