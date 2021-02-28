export const FETCH_SETTINGS_START = '[SETTINGS] FETCH_SETTINGS_START';
export const FETCH_SETTINGS_SUCCESS = '[SETTINGS] FETCH_SETTINGS_SUCCESS';
export const FETCH_SETTINGS_FAIL = '[SETTINGS] FETCH_SETTINGS_FAIL';

export interface UserSettings {
  name: string;
  birthDate: Date;
  height: string;
  gender: string;
  skill: number;
  city: string;
}

export interface SettingsState {
  loading: boolean;
  user?: UserSettings;
  error?: string;
}

interface FetchSettingsStartAction {
  type: typeof FETCH_SETTINGS_START;
}

interface FetchSettingsSuccessAction {
  type: typeof FETCH_SETTINGS_SUCCESS;
  payload: UserSettings;
}

interface FetchSettingsErrorAction {
  type: typeof FETCH_SETTINGS_FAIL;
}

export type SettingsActionTypes =
  | FetchSettingsStartAction
  | FetchSettingsSuccessAction
  | FetchSettingsErrorAction;
