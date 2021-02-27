export const LOGIN_START = '[AUTH] LOGIN_START';
export const LOGIN_SUCCESS = '[AUTH] LOGIN_SUCCESS';
export const LOGIN_FAIL = '[AUTH] LOGIN_FAIL';

export interface AuthState {
  loading: boolean;
  token?: string;
  email?: string;
  error?: string;
}

interface LoginStartAction {
  type: typeof LOGIN_START;
}

interface LoginSuccessAction {
  type: typeof LOGIN_SUCCESS;
  payload: {
    token: string;
    email: string;
  };
}

interface LoginErrorAction {
  type: typeof LOGIN_FAIL;
}

export type AuthActionTypes =
  | LoginStartAction
  | LoginSuccessAction
  | LoginErrorAction;
