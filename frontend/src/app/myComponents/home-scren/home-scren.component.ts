import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home-scren',
  templateUrl: './home-scren.component.html',
  styleUrls: ['./home-scren.component.css'],
})

export class HomeScrenComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit() {}

  clickToRegister(value : string) {
    // alert("you clicke register");
	console.log(value);
    this.router.navigate([`${value}`]);
  }

}
