import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppServiceService } from 'src/app/myServices/app-service.service';

@Component({
  selector: 'app-todo-header',
  templateUrl: './todo-header.component.html',
  styleUrls: ['./todo-header.component.css'],
})
export class TodoHeaderComponent implements OnInit {
  title!: string;
  desc!: string;
  todo: string[] = [];
  id: string = '';
  public showModal: boolean = false;

  constructor(
    private appService: AppServiceService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.id = this.route.snapshot.params['maildId'];
    const localItem = localStorage.getItem(this.id);
    if (localItem?.length == null) {
      this.todo = [];
    } else {
      this.todo = JSON.parse(localItem);
    }
  }

  ngOnInit(): void {}

  addTodo() {
    this.todo.push(this.title);
    console.log(this.id, 'maildId');
    localStorage.setItem(this.id, JSON.stringify(this.todo));
  }

  logout() {
    this.router.navigate(['login']);
  }
}
