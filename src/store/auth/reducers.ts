import {
  AuthActionTypes,
  AuthState,
  LOGIN_FAIL,
  LOGIN_START,
  LOGIN_SUCCESS,
} from './types';

const initialState: AuthState = {
  loading: false,
};

export const authReducer = (
  state = initialState,
  action: AuthActionTypes
): AuthState => {
  switch (action.type) {
    case LOGIN_START:
      return {
        ...state,
        error: undefined,
        loading: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        ...action.payload,
        loading: false,
      };
    case LOGIN_FAIL:
      return {
        ...state,
        error: 'Something went wrong. Check your user/password and try again',
        loading: false,
      };
  }
  // ts finds this unreachable, but that's because it's missing the initial action
  // DO NOT DELETE
  return state;
};
