export const FETCH_DASHBOARD_START = '[DASHBOARD] FETCH_DASHBOARD_START';
export const FETCH_DASHBOARD_SUCCESS = '[DASHBOARD] FETCH_DASHBOARD_SUCCESS';
export const FETCH_DASHBOARD_FAIL = '[DASHBOARD] FETCH_DASHBOARD_FAIL';

export interface Match {
  against: [string, string];
  date: Date;
  partner: string;
  result: [[number, number], [number, number], [number, number]?];
}

export interface DashboardState {
  loading: boolean;
  loaded: boolean;
  matches: Match[];
  error?: string;
}

interface FetchSettingsStartAction {
  type: typeof FETCH_DASHBOARD_START;
}

interface FetchSettingsSuccessAction {
  type: typeof FETCH_DASHBOARD_SUCCESS;
  payload: Match[];
}

interface FetchSettingsErrorAction {
  type: typeof FETCH_DASHBOARD_FAIL;
}

export type SettingsActionTypes =
  | FetchSettingsStartAction
  | FetchSettingsSuccessAction
  | FetchSettingsErrorAction;
