import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AppState } from 'src/app/state/app.state';
import { Store } from '@ngrx/store';
import { loginStart } from '../state/auth.actions';
import { setLoadingSpinner } from 'src/app/state/shared/shared.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  });

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
  }

  loginSubmit(): void {
    console.log('in loginSubmit : ', this.loginForm.value);
    this.store.dispatch(setLoadingSpinner({status: true}));
    this.store.dispatch(loginStart({email: this.loginForm.value.email, password: this.loginForm.value.password}));
  }

}
