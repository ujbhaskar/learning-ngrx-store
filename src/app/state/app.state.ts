
import { SharedState } from './shared/shared.state';
import { SHARED_STATE_NAME } from './shared/shared.selector';
import { SharedReducer } from './shared/shared.reducers';

export interface AppState {
  [SHARED_STATE_NAME]: SharedState;
}

export const appReducer = {
  [SHARED_STATE_NAME]: SharedReducer
};
