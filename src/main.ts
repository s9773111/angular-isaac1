import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import {
  FormsModule,
  ReactiveFormsModule,
  FormGroup,
  FormBuilder,
} from '@angular/forms';

// 原本的元件
@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  template: `
    <p>Hello from {{name}}!</p>
    <a target="_blank" href="https://angular.io/start">
      Learn more about Angular 
    </a>

    <hr/>

    <div class="time">
      <p>{{today | date:'hh:mm:ss'}}</p>
    </div>
    <div class="date">
      <p>{{today | date }}</p>
    </div>

    <hr/>

    <p>{{name | uppercase}}</p>
    <p>{{name | lowercase}}</p>

    <hr/>

    <form [formGroup]="loginForm">
      <label for="username">Username:</label>
      <input type="text" id="username" formControlName="username">
      <br/>
      <label for="password">Password:</label>
      <input type="password" id="password" formControlName="password">

      <button type="submit">Login</button>
    </form>
  `,
})
export class App {
  name = 'Angular Isaac Project';
  today: Date;
  loginForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      username: '',
      password: '',
    });
  }

  ngOnInit(): void {
    this.today = new Date();
    setInterval(() => {
      this.today = new Date();
    }, 1000);
  }

  onSubmit() {
    console.log(this.loginForm.value);
  }
}

bootstrapApplication(App);
