import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { increment, decrement, reset } from '../state/counter.actions';
import { CounterState } from 'src/app/model/counter.model';
import { AppState } from 'src/app/state/app.state';

@Component({
  selector: 'app-counter-button',
  templateUrl: './counter-button.component.html',
  styleUrls: ['./counter-button.component.scss']
})
export class CounterButtonComponent implements OnInit {
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
  }

  increment(): void {
    this.store.dispatch(increment());
  }
  decrement(): void {
    this.store.dispatch(decrement());
  }
  reset(): void {
    this.store.dispatch(reset());
  }
}
