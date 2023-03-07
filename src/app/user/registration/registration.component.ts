import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styles: [
  ]
})
export class RegistrationComponent {

  constructor(private userService: UserService, private toastr: ToastrService, private router: Router) { }

  ngOnInit() {
    if (localStorage.getItem('token') != null)
      this.router.navigateByUrl('/films');
  }

  signupForm = new FormGroup({
    fullName: new FormControl('', [Validators.required]),
    username: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required]),
    confirmPassword: new FormControl(null, [Validators.required])
  }, { validators: this.comparePassword })


  handleSubmit() {
    this.userService.register(this.signupForm.value).
      subscribe(
        (res) => {
          if (res.succeeded) {
            this.toastr.success('New User has been Registered', 'Registration Successful');
            this.signupForm.reset();
            this.router.navigateByUrl('/user/login')
          } else {
            res.errors.forEach((element: { description: any; code: any; }) => {
              switch (element.code) {
                case 'DuplicateUserName':
                  this.toastr.error('Username is already taken', 'Resgistration Failed');
                  break;

                default:
                  this.toastr.error(element.description, 'Registration Failed');
                  break;
              }
            });
          }
        });
  }

  comparePassword(control: AbstractControl): ValidationErrors | null {
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');

    if (password?.value != confirmPassword?.value) {
      return { passwordMismatch: true }
    }
    return null;
  }

  get get() {
    return this.signupForm.controls;
  }

}
