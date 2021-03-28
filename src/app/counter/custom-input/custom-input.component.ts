import { Component, OnInit } from '@angular/core';
import { counterState } from '../state/counter.state';
import { Store } from '@ngrx/store';
import { customIncrement } from '../state/counter.actions';

@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.scss']
})
export class CustomInputComponent implements OnInit {
  customInput: number;
  constructor(private store:Store<{counter: counterState}>) { }

  ngOnInit(): void {
  }

  addToCounter() {
    console.log('lets add : ', this.customInput);
    this.store.dispatch(customIncrement({value: this.customInput}));
  }

}
