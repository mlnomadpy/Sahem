import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
// import custom validator to validate that password and confirm password fields match
import { MustMatch } from '../helpers/must-match.validator';

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
  submitted = false;

  strength = {
    0: "Worst",
    1: "Bad",
    2: "Weak",
    3: "Good",
    4: "Strong"
  }

  meterValue = 0;

  // Constructor
  constructor(private router: Router, private formBuilder: FormBuilder, private auth: AuthenticationService) { }

  // Init
  ngOnInit(): void {


    this.registerForm = new FormGroup(
      {
        'username': new FormControl('',
          [
            Validators.required,
            Validators.minLength(5),
          ]
        ),
        'email': new FormControl('',
          [
            Validators.required,
            Validators.email,
            // Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'),

          ]
        ),
        'password': new FormControl('',
          [
            Validators.required,
            Validators.minLength(10),
            Validators.pattern('^(?:(?:(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]))|(?:(?=.*[a-z])(?=.*[A-Z])(?=.*[*.!@$%^&(){}[]:;<>,.?/~_+-=|\]))|(?:(?=.*[0-9])(?=.*[A-Z])(?=.*[*.!@$%^&(){}[]:;<>,.?/~_+-=|\]))|(?:(?=.*[0-9])(?=.*[a-z])(?=.*[*.!@$%^&(){}[]:;<>,.?/~_+-=|\]))).{8,32}$'),
          ]
        ),
        'confirmPassword': new FormControl('',
          [
            Validators.required,
            Validators.minLength(10),
            Validators.pattern('^(?:(?:(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]))|(?:(?=.*[a-z])(?=.*[A-Z])(?=.*[*.!@$%^&(){}[]:;<>,.?/~_+-=|\]))|(?:(?=.*[0-9])(?=.*[A-Z])(?=.*[*.!@$%^&(){}[]:;<>,.?/~_+-=|\]))|(?:(?=.*[0-9])(?=.*[a-z])(?=.*[*.!@$%^&(){}[]:;<>,.?/~_+-=|\]))).{8,32}$'),
          ]
        ),

      }
      // validator: MustMatch('password', 'confirmPassword')


    );

    this.passwordListener();

  }

  // password Listener
  passwordListener() {
    // let meter = document.getElementById('password-strength-meter');
    let text = document.getElementById('password-strength-text');
    // let passwordF = document.getElementById('password');
    this.f.password.valueChanges.subscribe((val) => {
      let password = val;

      let result = this.passwordValidates(password);
      this.meterValue = result;
      if (password !== "") {
        text.innerHTML = "Strength: " + this.strength[result];
      } else {
        text.innerHTML = "";
      }
    });

  }

  // Password strenght validator
  passwordValidates(pass: string) {
    let count = 0;

    if (8 <= pass.length && pass.length <= 32) {
      if (pass.match(".*\\d.*"))
        count++;
      if (pass.match(".*[a-z].*"))
        count++;
      if (pass.match(".*[A-Z].*"))
        count++;
      if (pass.match(".*[*.!@#$%^&(){}[]:\"; '<>,.?/~`_+-=|\\].*"))
        count++;
    }

    return count;
  }


  // passwordFocus() {
  //   let passwordForm = document.getElementById('password');
  // }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit(value: any) {
    console.log(value);
  }

  public onRegisterSubmit(): void {
    this.submitted = true;
    this.formError = '';

    if (
      !this.registerForm.get('username').value ||
      !this.registerForm.get('email').value ||
      !this.registerForm.get('password').value || !this.registerForm.get('confirmPassword').value
    ) {
      this.formError = 'All fields are required, please try again';
    }
    if (this.registerForm.invalid) {
      this.formError = 'Form is invalid';
    }
    else {
      if (this.registerForm.get('password').value !== this.registerForm.get('confirmPassword').value) {
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
