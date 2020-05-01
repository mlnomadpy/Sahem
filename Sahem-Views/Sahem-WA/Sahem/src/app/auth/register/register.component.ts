import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  formError: string = '';
  credentials = {
    _id: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    exp: 0,
    iat: 0,
  };
  constructor(private router: Router, private formBuilder: FormBuilder, private auth: AuthenticationService) { }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      'username': new FormControl('',
        [
          Validators.required,
          Validators.minLength(10)
        ]
      ),
      'email': new FormControl('',
        [
          Validators.required,
          Validators.email
        ]
      ),
      'password': new FormControl('',
        [
          Validators.required,
          Validators.minLength(10),
          Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'),
        ]
      ),
      'confirmPassword': new FormControl('',
        [
          Validators.required,
          Validators.minLength(10)
        ]
      ),

    });

  }
  onSubmit(value: any) {
    console.log(value);
  }
  public onRegisterSubmit(): void {

    this.formError = '';
    if (
      !this.registerForm.get('username').value ||
      !this.registerForm.get('email').value  ||
      !this.registerForm.get('password').value  || !this.registerForm.get('confirmPassword').value 
    ) {
      this.formError = 'All fields are required, please try again';
    } else {
      if (this.registerForm.get('password').value  !== this.registerForm.get('confirmPassword').value ) {
        this.formError = 'Password doesn\'t match';

      }
      else {
        this.formError = 'All good';
        this.credentials.username = this.registerForm.get('username').value;
        this.credentials.email = this.registerForm.get('email').value;
        this.credentials.password = this.registerForm.get('password').value;
        this.credentials.confirmPassword = this.registerForm.get('confirmPassword').value;
        this.doRegister();
      }


    }
  }

  private doRegister(): void {
    this.auth.register(this.credentials)
      .then(() => this.router.navigateByUrl('/'))
      .catch((message) => this.formError = message);
  }
}
