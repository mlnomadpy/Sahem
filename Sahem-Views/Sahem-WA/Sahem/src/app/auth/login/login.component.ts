import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm = new FormControl('');
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }
  onSubmit(value: any) {
    console.log(value);
  }


}
