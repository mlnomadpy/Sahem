import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),

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
    if (!this.credentials.email || !this.credentials.password) {
      this.formError = 'All fields are required, please try again';
    } else {
      console.log(this.credentials);
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
