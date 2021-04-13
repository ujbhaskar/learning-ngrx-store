import { createReducer, on } from '@ngrx/store';
import { initialAuthState } from './auth.state';
import { loginSuccess } from './auth.actions';

const authReducerFun = createReducer(initialAuthState,
  on(loginSuccess, (state, action) => {
    return {
      ...state,
      userData: action.authResponse.userData,
      token: action.authResponse.token
    }
  })
);


export function authReducer(state, action): any {
  return authReducerFun(state, action);
}

