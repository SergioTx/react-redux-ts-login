import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { authReducer } from './auth';
import { settingsReducer } from './settings';

const rootReducer = combineReducers({
  auth: authReducer,
  settings: settingsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const middleWares = [thunk];

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleWares))
);
