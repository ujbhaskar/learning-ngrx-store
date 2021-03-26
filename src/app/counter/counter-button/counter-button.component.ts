import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counter-button',
  templateUrl: './counter-button.component.html',
  styleUrls: ['./counter-button.component.scss']
})
export class CounterButtonComponent implements OnInit {
  @Output() incrementE = new EventEmitter<void>();
  @Output() decrementE = new EventEmitter<void>();
  @Output() resetE = new EventEmitter<void>();
  constructor() { }

  ngOnInit(): void {
  }

  increment() {
    this.incrementE.emit();
  }
  decrement() {
    this.decrementE.emit();
  }
  reset() {
    this.resetE.emit();
  }
}
