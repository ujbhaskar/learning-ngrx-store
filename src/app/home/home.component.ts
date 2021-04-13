import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  numerator = 12345;
  denominator = 23;
  i: any;

  constructor() { }

  ngOnInit(): void {
    this.getLength();
  }

  getLength(): void {
    const i = (this.numerator.toString().length > this.denominator.toString().length) ?
      this.numerator.toString().length : this.denominator.toString().length;
    console.log(i);
    this.i = i;
  }

}
