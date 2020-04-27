import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  loginForm = new FormControl('');
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }
  onSubmit(value: any) {
    console.log(value);
  }
}
