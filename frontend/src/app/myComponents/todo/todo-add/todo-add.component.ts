import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataSharingService } from 'src/app/myServices/data-sharing.service';
import {CdkDragDrop, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css']
})
export class TodoAddComponent implements OnInit {
  title : string = "";
  title1 : string = "";
  id: string = "";
  // todoArr: any[] = [];
  @Input() todoArr: string[] =[]
  
  



  constructor( private dataService : DataSharingService, private route :ActivatedRoute) { 

   this.id= this.route.snapshot.params['maildId'];
  //  this.id = this.route.snapshot.params['maildId'];
    // localStorage.clear();
  //  for(let i=0;i<this.todoArr.length;i+=1){
  //   console.log(this.todoArr[i]);
  //  }
  }

  ngOnInit(): void {
    // this.addTodo();
    console.log("oninit");
   
    this.dataService.currentApprovalStageMessage.subscribe(msg=>this.title = msg);
    
  }
  
  change(index:number){
    console.log(this.id);
    console.log(this.todoArr[index]);
    this.dataService.updateApprovalMessage(this.todoArr[index])
    this.todoArr.splice(index,1);
    localStorage.setItem(this.id , JSON.stringify(this.todoArr));

    // localStorage.removeItem('todos');
  }
  // deleteTodo(todo: todo){
  //   console.log(todo);
  //   let index = this.todos?.indexOf(todo);
  //   this.todos?.splice(index,1)
  //   localStorage.setItem("todos", JSON.stringify(this.todos));
  // }
  // addTodo(todo: todo){
  //   console.log(todo);
  //   this.todos.push(todo);
  //   localStorage.setItem("todos", JSON.stringify(this.todos));
  // }
  // drop(event: CdkDragDrop<string[]>) {
  //   if (event.previousContainer === event.container) {
  //     moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
  //   } else {
  //     transferArrayItem(
  //       event.previousContainer.data,
  //       event.container.data,
  //       event.previousIndex,
  //       event.currentIndex,
  //     );
  //   }
  // }
  drop(event: CdkDragDrop<string[]>) {
    transferArrayItem(
      event.previousContainer.data,
      event.container.data,
      event.previousIndex,
      event.currentIndex
    );
    this.todoArr.splice(event.currentIndex,1);
    localStorage.setItem(this.id , JSON.stringify(this.todoArr));

  }
  

}

