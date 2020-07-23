import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {User} from './../../interfaces/user';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  public model: User;
  constructor() { 
    this.model = {
      firstName: '',
      lastName: '',
      userName: '',
      email: '',
      address: '',
      password: ''
    }
  }

  public signupButtonClicked(event) {
    alert(JSON.stringify(this.model));
    event.preventDefault();
  }
  ngOnInit(): void {
  }

}
