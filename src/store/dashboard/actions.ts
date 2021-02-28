import { ThunkAction } from 'redux-thunk';
import { RootState } from '../store';
import { firebaseUrl } from '../url';
import {
  FETCH_DASHBOARD_FAIL,
  FETCH_DASHBOARD_START,
  FETCH_DASHBOARD_SUCCESS,
  SettingsActionTypes,
  Match,
} from './types';

export const fetchDashboardStart = (): SettingsActionTypes => {
  return {
    type: FETCH_DASHBOARD_START,
  };
};

export const fetchDashboardSuccess = (
  payload: Match[]
): SettingsActionTypes => {
  return {
    type: FETCH_DASHBOARD_SUCCESS,
    payload,
  };
};

export const fetchDashboardFail = (): SettingsActionTypes => {
  return {
    type: FETCH_DASHBOARD_FAIL,
  };
};

type AuthActionThunk = ThunkAction<
  void,
  RootState,
  unknown,
  SettingsActionTypes
>;

interface SettingsResponse {
  matches: {
    against: [string, string];
    date: string;
    partner: string;
    result: [[number, number], [number, number], [number, number]?];
  }[];
}

export const fetchDashboard = (): AuthActionThunk => (dispatch, getState) => {
  dispatch(fetchDashboardStart());

  const token = getState().auth.token;
  fetch(`${firebaseUrl}/dashboard.json?auth=${token}`, {
    headers: { 'Content-Type': 'application/json' },
  })
    .then((res) => {
      if (!res.ok) throw Error();
      return res;
    })
    .then((res) => res.json())
    .then((res: SettingsResponse) => {
      const matches = res.matches.map((match) => {
        return {
          ...match,
          date: new Date(match.date),
        };
      });
      dispatch(fetchDashboardSuccess(matches));
    })
    .catch((_err) => {
      dispatch(fetchDashboardFail());
    });
};
