import { CdkDragDrop, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppServiceService } from 'src/app/myServices/app-service.service';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import * as uuid from 'uuid';
import $ from 'jquery';

const myId = uuid.v4();

@Component({
  selector: 'app-todo-header',
  templateUrl: './todo-header.component.html',
  styleUrls: ['./todo-header.component.css'],
})
export class TodoHeaderComponent implements OnInit {
  title!: string;
  desc!: string;
  todo: any[] = [];
  todoInProgress: any[] = [];
  todoForComplete: any[] = [];
  id: string = '';
  faTrash = faTrash;

  constructor(
    private appService: AppServiceService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.id = this.route.snapshot.params['maildId'];
    const localItem = localStorage.getItem('allTodo');
    if (localItem?.length == null) {
      this.todo = [];
    } else {
      this.todo = JSON.parse(localItem);
    }

    const localItemForProgress = localStorage.getItem('inProgress');
    if (localItemForProgress?.length == null) {
      this.todoInProgress = [];
    } else {
      this.todoInProgress = JSON.parse(localItemForProgress);
    }

    const localItemForCompletedTodo = localStorage.getItem('completeTOdo');
    if (localItemForCompletedTodo?.length == null) {
      this.todoForComplete = [];
    } else {
      this.todoForComplete = JSON.parse(localItemForCompletedTodo);
    }
  }

  ngOnInit(): void {
  }

  addTodo() {
    if (
      this.title == null ||
      this.title == undefined ||
      this.desc == null ||
      this.desc == undefined ||
      this.title == '' ||
      this.desc == ''
    ) {
      alert("Title and desc can't be blank Please Fill The Feild");
      return;
    }
    this.todo.push({ id: uuid.v4(), title: this.title, desc: this.desc });
    console.log(this.todo);
    localStorage.setItem('allTodo', JSON.stringify(this.todo));
  }

  showList(data: any) {
    console.log('shared data');
    this.todoInProgress = data;
    console.log(this.todoInProgress);
  }

  change(index: number) {
    console.log('hello');

    this.todoInProgress.push(this.todo[index]);
    this.todo.splice(index, 1);
    localStorage.removeItem('allTodo');
    localStorage.setItem('allTodo', JSON.stringify(this.todo));
    localStorage.setItem('inProgress', JSON.stringify(this.todoInProgress));
  }

  TransferToComplete(index: number) {
    console.log('hello');
    this.todoForComplete.push(this.todoInProgress[index]);
    console.log(this.todoForComplete);
    this.todoInProgress.splice(index, 1);
    localStorage.removeItem('inProgress');
    localStorage.setItem('inProgress', JSON.stringify(this.todoInProgress));
    localStorage.setItem('completeTOdo', JSON.stringify(this.todoForComplete));
  }

  drop(event: CdkDragDrop<string[]>) {
    transferArrayItem(
      event.previousContainer.data,
      event.container.data,
      event.previousIndex,
      event.currentIndex
    );
    // splice(previousContainer.data,previousIndex,1)
    console.log(this.todo, this.todoForComplete, this.todoInProgress);
    // this.todoArr.splice(event.currentIndex,1);
    localStorage.setItem('allTodo', JSON.stringify(this.todo));
    localStorage.setItem('inProgress', JSON.stringify(this.todoInProgress));
    localStorage.setItem('completeTOdo', JSON.stringify(this.todoForComplete));
  }
  DeleteConfirmation(index: number) {
    if (confirm('Do You Really Want To Delete This Todo') == true) {
      this.todo.splice(index, 1);
      localStorage.setItem('allTodo', JSON.stringify(this.todo));
    }
  }
}
