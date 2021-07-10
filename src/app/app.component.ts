import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'This is an Angular Application';
  constructor(){
    setTimeout(() => {
      this.title = "Welcome to Todo App"
    }, 2000);
  }
}
