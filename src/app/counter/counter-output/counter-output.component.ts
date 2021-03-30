import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getCounter } from '../state/counter.selectors';
import { CounterState } from 'src/app/model/counter.model';
import { AppState } from 'src/app/state/app.state';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.scss']
})
export class CounterOutputComponent implements OnInit {
  counter$: Observable<CounterState>;
  counterValue$: Observable<number>;
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.counter$ = this.store.select('counter');
    this.counterValue$ = this.store.select(getCounter)
  }

}
