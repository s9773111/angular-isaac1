import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';

// 原本的元件
@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule],
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

  `,
})
export class App {
  name = 'Angular Isaac Project';
  today: Date;

  constructor() {}

  ngOnInit(): void {
    this.today = new Date();
    setInterval(() => {
      this.today = new Date();
    }, 1000);
  }
}

bootstrapApplication(App);
