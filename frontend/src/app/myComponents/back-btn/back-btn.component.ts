import { Component, OnInit } from '@angular/core';
import { BackBtnService } from 'src/app/myServices/back-btn.service';

@Component({
  selector: 'app-back-btn',
  templateUrl: './back-btn.component.html',
  styleUrls: ['./back-btn.component.css']
})
export class BackBtnComponent implements OnInit {

  constructor(private back: BackBtnService) { }

  ngOnInit(): void {
    
  }
  backBtn(){
    this.back.back();
  }
}
