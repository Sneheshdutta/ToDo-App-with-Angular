import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todo!: Todo[];

  constructor() { 
    this.todo = [
      {
        sno: 1,
        title: "This is title 1",
        desc: "Give description here",
        active: true
      },
      {
        sno: 2,
        title: "This is title 2",
        desc: "Give description here",
        active: true
      },
      {
        sno: 3,
        title: "This is title 3",
        desc: "Give description here",
        active: true
      }
    ]
  }

  ngOnInit(): void {
  }

}
