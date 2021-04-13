import { createReducer, on } from '@ngrx/store';
import { initialState } from './shared.state';
import { setLoadingSpinner } from './shared.actions';


const sharedReducerFun = createReducer(initialState, on(setLoadingSpinner, (state, action) => {
  return {
    ...state,
    showLoading: action.status,
  };
}));


export function SharedReducer(state, action): any {
  return sharedReducerFun(state, action);
}

