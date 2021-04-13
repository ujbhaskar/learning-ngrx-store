import { createAction, props } from '@ngrx/store';
import { AuthResponse } from 'src/app/model/auth-response.model';

export const LOGIN_START = 'Auth - login start';
export const LOGIN_SUCCESS = 'Auth - login success';
export const LOGIN_FAILED = 'Auth - login failed';

export const loginStart = createAction(LOGIN_START, props<{email: string, password: string}>());

export const loginSuccess = createAction(LOGIN_SUCCESS, props<{authResponse: AuthResponse}>());

export const loginFailed = createAction(LOGIN_FAILED);

