import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent {
  constructor(private service:UserService, private router:Router, private toastr:ToastrService){}

  formModel = {
    UserName: '',
    Password: ''
  }

  ngOnInit() {
    if(localStorage.getItem('token') != null)
      this.router.navigateByUrl('/films');
  }

  onSubmit(form:NgForm){
    this.service.login(form.value).subscribe(
      (res:any) => {
        localStorage.setItem('token', res.token);
        this.router.navigateByUrl('/films');
      },
      (err) => {
        this.toastr.error('Incorrect Username or Password', 'Login Failed');
      }
    )
  }

}
