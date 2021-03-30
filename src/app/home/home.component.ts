import { Component, OnInit } from '@angular/core';
import { User, User1 } from '../model/user.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  user: User;
  user1: User1;
  constructor() { }

  ngOnInit(): void {
    this.user = {
      firstName: 'Ujjal',
      lastName: 'Bhaskar'
    };

    this.user1 = {
      ...this.user,
      email: 'u@tcs.com'
    };
  }

}
