import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-modal',
  templateUrl: './todo-modal.component.html',
  styleUrls: ['./todo-modal.component.css']
})
export class TodoModalComponent implements OnInit {

  constructor() { }

  title!: string;
  desc!: string;
  todo: string[] = [];
  id: string = '';
  public showModal: boolean = false;


  ngOnInit(): void {
  }
  addTodo() {
    this.todo.push(this.title);
    console.log(this.id, 'maildId');
    // console.log(this.todo);
    localStorage.setItem(this.id, JSON.stringify(this.todo));
  }

}
