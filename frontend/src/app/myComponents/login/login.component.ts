import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppServiceService } from 'src/app/myServices/app-service.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  userDetails = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  constructor(private router: Router, private appService: AppServiceService) {}

  ngOnInit(): void {}

  goToTodos() {

    this.appService.login(this.userDetails.value).subscribe((data) => {
      console.log(data, 'data');

      const result = JSON.stringify(data).split(':');

      const value = result[1].split('}');

      console.log(typeof value[0], value[0], typeof '399');
      if (value[0] == '401') {
        const errormsg = document.getElementById('errormsg');
        if (errormsg != null) errormsg.style.display = ' block';
      } else {
        console.log(typeof this.userDetails);
        console.log(this.userDetails.value.email);
        const maildId = this.userDetails.value.email;
        this.router.navigate([`todoList/${maildId}`]);
      }
    });
  }
  goToRegister() {
    this.router.navigate(['register']);
  }
}
