import { Component, OnInit } from '@angular/core';
import { AppServiceService } from './myServices/app-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent implements OnInit {
  title = 'frontend';

  constructor(private apiService: AppServiceService) {}

  ngOnInit(): void {
    this.getDataFromApi();
  }
  
  getDataFromApi() {
    this.apiService.getData().subscribe((response) => {
      console.log(response);
    });
  }
}
