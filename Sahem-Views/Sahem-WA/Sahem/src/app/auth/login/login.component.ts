import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    'username': new FormControl('',
      [
        Validators.required,
        Validators.minLength(10)
      ]
    ),
    'password': new FormControl('',
      [
        Validators.required,
        Validators.minLength(10),
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'),
      ]
    )

  });
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
  }
  onSubmit(value: any) {
    console.log(value);
  }

  public onLoginSubmit(): void {
    this.formError = '';
    if (!this.loginForm.get('username').value || !this.loginForm.get('password').value) {
      this.formError = 'All fields are required, please try again';
    } else {
      console.log(this.credentials);
      this.formError = 'All good';
      this.credentials.username = this.loginForm.get('username').value;
      this.credentials.password = this.loginForm.get('password').value;
      this.doLogin();
    }
  }

  private doLogin(): void {
    this.auth.login(this.credentials)
      .then(() => this.router.navigateByUrl('/'))
      .catch((message) => {
        this.formError = message
      });
  }

}
