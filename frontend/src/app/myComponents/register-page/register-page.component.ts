import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppServiceService } from 'src/app/myServices/app-service.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css'],
})
export class RegisterPageComponent implements OnInit {
  userDetails = new FormGroup({
    Name: new FormControl(),
    email: new FormControl('',[Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
    password: new FormControl('', Validators.required),
  });

  strongPassword: number = 0;
  constructor(private appService: AppServiceService, private router: Router) {}

  ngOnInit(): void {}

  getData() {
    this.appService.getData().subscribe((data) => {
      console.log(data);
    });
  }

  goToLogin() {
    let result;
    this.appService.Register(this.userDetails.value).subscribe((data) => {
      result = JSON.stringify(data).split(':');
      const value = result[1].split('}');

      if (
        this.userDetails.value.Name == '' ||
        this.userDetails.value.email == '' ||
        this.userDetails.value.password == ''
      ) {
        alert('Please Fill All Fiedls');
      } else if (value[0] == '399') {
        const errormsg = document.getElementById('errormsg');
        if (errormsg != null) errormsg.style.display = ' block';
      } else {
        this.router.navigate(['login']);
      }
    });
  }

  goToLoginDirect() {
    this.router.navigate(['login']);
    window.history.back();
  }

}
