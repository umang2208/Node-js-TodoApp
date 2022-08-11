import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataSharingService {
  private approvalStageMessage = new BehaviorSubject('');
  currentApprovalStageMessage = this.approvalStageMessage.asObservable();

  private approvProcessStageMsg = new BehaviorSubject('');
  currentProMsg = this.approvProcessStageMsg.asObservable();
 
  constructor() { }
  updateApprovalMessage(message: string) {
    console.log("inservice", message);
    this.approvalStageMessage.next(message)
    }
    ProcessApprovalMessage(message: string) {
      console.log("inservice", message);
      this.approvProcessStageMsg.next(message)
      }
}
