import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { customIncrement, changeCounterName } from '../state/counter.actions';
import { getName } from '../state/counter.selectors';
import { CounterState } from 'src/app/model/counter.model';

@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.scss']
})
export class CustomInputComponent implements OnInit {
  customInput: number;
  counterName: string;
  constructor(private store: Store<{counter: CounterState}>) { }

  ngOnInit(): void {
    this.store.select(getName).subscribe(name => {
      console.log('fetching counter name');
      this.counterName = name;
    });
  }

  addToCounter(): void {
    console.log('lets add : ', this.customInput);
    this.store.dispatch(customIncrement({value: this.customInput}));
  }

  changeName(): void {
    this.store.dispatch(changeCounterName());
  }
}
