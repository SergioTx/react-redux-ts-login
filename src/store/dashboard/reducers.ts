import {
  FETCH_DASHBOARD_FAIL,
  FETCH_DASHBOARD_START,
  FETCH_DASHBOARD_SUCCESS,
  SettingsActionTypes,
  DashboardState,
} from './types';

const initialState: DashboardState = {
  loading: false,
  loaded: false,
  matches: [],
};

export const dashboardReducer = (
  state = initialState,
  action: SettingsActionTypes
): DashboardState => {
  switch (action.type) {
    case FETCH_DASHBOARD_START:
      return {
        ...state,
        error: undefined,
        loading: true,
        loaded: false,
      };
    case FETCH_DASHBOARD_SUCCESS:
      return {
        ...state,
        // overwrite with matches from the call as it will always return all of them
        matches: action.payload,
        loading: false,
        loaded: true,
      };
    case FETCH_DASHBOARD_FAIL:
      return {
        ...state,
        error: 'Something went wrong. Try again in a few seconds',
        loading: false,
        loaded: false,
      };
  }
  // ts finds this unreachable, but that's because it's missing the initial action
  // DO NOT DELETE
  return state;
};
