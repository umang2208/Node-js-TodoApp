import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataSharingService } from 'src/app/myServices/data-sharing.service';
import { CdkDragDrop, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-todo-in-progress',
  templateUrl: './todo-in-progress.component.html',
  styleUrls: ['./todo-in-progress.component.css'],
})
export class TodoInProgressComponent implements OnInit {
  message: any[] = [];
  approvalText: string = '';
  id: any;

  constructor(
    private appService: DataSharingService,
    private route: ActivatedRoute
  ) {
    this.id = this.route.snapshot.params['maildId'];

    const localItem = localStorage.getItem(this.id + 'progress');
    if (localItem?.length == null) {
      this.message = [];
    } else {
      this.message = JSON.parse(localItem);
    }
  }

  ngOnInit() {
    this.appService.currentApprovalStageMessage.subscribe((msg) => {
      console.log(msg, 'in progess tab');
      if (msg != '' && msg != undefined) {
        this.message.push(msg);
        localStorage.setItem(
          this.id + 'progress',
          JSON.stringify(this.message)
        );
      }
    });
  }

  submit() {
    console.log(this.approvalText, 'progess');
    this.appService.updateApprovalMessage(this.approvalText);
  }

  change(index: number) {
    console.log(this.message);
    this.appService.ProcessApprovalMessage(this.message[index]);
    this.message.splice(index, 1);
    localStorage.setItem(this.id + 'progress', JSON.stringify(this.message));
  }

  drop(event: CdkDragDrop<any[]>) {
    transferArrayItem(
      event.previousContainer.data,
      event.container.data,
      event.previousIndex,
      event.currentIndex
    );
    console.log(event);
    // this.message.splice(0, 1);

    localStorage.setItem(this.id + 'progress', JSON.stringify(this.message));

    // this.message.push(event.container.data[0]);
    console.log(this.message);
  }
 
}
