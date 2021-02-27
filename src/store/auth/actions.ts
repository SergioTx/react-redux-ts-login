import { Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import {
  AuthActionTypes,
  AuthState,
  LOGIN_FAIL,
  LOGIN_START,
  LOGIN_SUCCESS,
} from './types';

export const loginStart = (): AuthActionTypes => {
  return {
    type: LOGIN_START,
  };
};

export const loginSuccess = (payload: {
  token: string;
  email: string;
}): AuthActionTypes => {
  return {
    type: LOGIN_SUCCESS,
    payload,
  };
};

export const loginFail = (): AuthActionTypes => {
  return {
    type: LOGIN_FAIL,
  };
};

type AuthActionThunk = ThunkAction<void, AuthState, unknown, AuthActionTypes>;

interface LoginResponse {
  displayName: string;
  email: string;
  expiresIn: string;
  idToken: string;
  kind: string;
  localId: string;
  refreshToken: string;
  registered: boolean;
}

export const login = (email: string, password: string): AuthActionThunk => (
  dispatch: Dispatch
) => {
  dispatch(loginStart());
  const body = JSON.stringify({
    email,
    password,
    returnSecureToken: true,
  });
  fetch(
    'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBXFOgoMgDBsgqSKUbN0zjynlYnUfZQPa4',
    {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body,
    }
  )
    .then((res) => {
      if (!res.ok) throw Error();
      return res;
    })
    .then((res) => res.json())
    .then((res: LoginResponse) => {
      dispatch(loginSuccess({ token: res.idToken, email: res.email }));
    })
    .catch((_err) => {
      dispatch(loginFail());
    });
};
