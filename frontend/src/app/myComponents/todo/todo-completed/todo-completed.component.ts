import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataSharingService } from 'src/app/myServices/data-sharing.service';
import { CdkDragDrop, transferArrayItem } from "@angular/cdk/drag-drop";

@Component({
  selector: 'app-todo-completed',
  templateUrl: './todo-completed.component.html',
  styleUrls: ['./todo-completed.component.css'],
})
export class TodoCompletedComponent implements OnInit {
  message: any[] = [];
  approvalText: string = '';
  id: any;
  constructor(private appService: DataSharingService, private route:ActivatedRoute) {

    this.id= this.route.snapshot.params['maildId'];
    const localItem = localStorage.getItem(this.id + 'completed');
    if (localItem?.length == null) {
      this.message = [];
    } else {
      this.message = JSON.parse(localItem);
    }
  }

  ngOnInit() {
    this.appService.currentProMsg.subscribe((msg) => {
      console.log(msg, 'in completed tab');
      if (msg != '' && msg != undefined) {
        this.message.push(msg);
        localStorage.setItem( this.id + 'completed', JSON.stringify(this.message));
      }
  

    });
  }
  submit() {
    console.log(this.approvalText, 'progess');
    this.appService.updateApprovalMessage(this.approvalText);
  }
  change(index: number) {
    console.log('abcd');
  }

  drop(event: CdkDragDrop<string[]>) {
    transferArrayItem(
      event.previousContainer.data,
      event.container.data,
      event.previousIndex,
      event.currentIndex
    );
    console.log(typeof(event.container.data[0]));
    localStorage.setItem( this.id + 'completed', JSON.stringify(this.message));
  
  }

  pageSize = 5;
   pageSizes = [ 5,10,20];
   count: number =0;
   page : number = 1;
   onPageChange(event:any){
     this.page = event;
     this.message;
   }
   onPageSizeChange(event:any):void{
     this.pageSize = event.target.value;
     this.page = 1;
     this.message;
   }
}
