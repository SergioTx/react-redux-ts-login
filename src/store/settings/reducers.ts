import {
  FETCH_SETTINGS_FAIL,
  FETCH_SETTINGS_START,
  FETCH_SETTINGS_SUCCESS,
  SettingsActionTypes,
  SettingsState,
} from './types';

const initialState: SettingsState = {
  loading: false,
};

export const settingsReducer = (
  state = initialState,
  action: SettingsActionTypes
): SettingsState => {
  switch (action.type) {
    case FETCH_SETTINGS_START:
      return {
        ...state,
        error: undefined,
        loading: true,
      };
    case FETCH_SETTINGS_SUCCESS:
      return {
        ...state,
        user: {
          ...state.user,
          ...action.payload,
        },
        loading: false,
      };
    case FETCH_SETTINGS_FAIL:
      return {
        ...state,
        error: 'Something went wrong. Try again in a few seconds',
        loading: false,
      };
  }
  // ts finds this unreachable, but that's because it's missing the initial action
  // DO NOT DELETE
  return state;
};
