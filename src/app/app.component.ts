import { Component, OnInit } from '@angular/core';
import { AppState } from './state/app.state';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getLoading } from './state/shared/shared.selector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'learning-store';
  showLoading$: Observable<boolean>;

  constructor(
    private store: Store<AppState>
  ) {

  }

  ngOnInit(): void {
    this.showLoading$ = this.store.select(getLoading);
  }
}
