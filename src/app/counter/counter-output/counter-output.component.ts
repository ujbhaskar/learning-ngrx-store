import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { counterState } from '../state/counter.state';
import { Observable } from 'rxjs';
import { getCounter } from '../state/counter.selectors';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.scss']
})
export class CounterOutputComponent implements OnInit {
  counter$: Observable<counterState>;
  counterValue$: Observable<number>;
  constructor(private store: Store<{counter: counterState}>) { }

  ngOnInit(): void {
    this.counter$ = this.store.select('counter');
    this.counterValue$ = this.store.select(getCounter)
  }

}
