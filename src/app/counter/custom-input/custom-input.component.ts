import { Component, OnInit } from '@angular/core';
import { counterState } from '../state/counter.state';
import { Store } from '@ngrx/store';
import { customIncrement, changeCounterName } from '../state/counter.actions';
import { getName } from '../state/counter.selectors';

@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.scss']
})
export class CustomInputComponent implements OnInit {
  customInput: number;
  counterName: string;
  constructor(private store:Store<{counter: counterState}>) { }

  ngOnInit(): void {
    this.store.select(getName).subscribe(name=>{
      console.log('fetching counter name');
      this.counterName = name;
    })
  }

  addToCounter() {
    console.log('lets add : ', this.customInput);
    this.store.dispatch(customIncrement({value: this.customInput}));
  }

  changeName() {
    this.store.dispatch(changeCounterName());
  }
}
