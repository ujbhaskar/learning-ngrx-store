import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { loginStart, loginSuccess } from './auth.actions';
import {exhaustMap, map} from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';
import { AppState } from 'src/app/state/app.state';
import { Store } from '@ngrx/store';
import { setLoadingSpinner } from 'src/app/state/shared/shared.actions';
@Injectable()
export class AuthEffects {

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private store: Store<AppState>,
  ) { }

  login$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loginStart),
      exhaustMap((action) => {
        return this.authService.login(action.email, action.password).pipe(
          map(data => {
            this.store.dispatch(setLoadingSpinner({status: false}));
            return loginSuccess({authResponse: data});
          })
        );
      })
    );
  });
}
