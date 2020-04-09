import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'profile-create',
  templateUrl: './profile-create.component.html',
  styleUrls: ['./profile-create.component.css']
})
export class ProfileCreateComponent implements OnInit {

  isLinear = true;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  
  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      tagCtrl: ['', Validators.required]
    });

    this.secondFormGroup = this._formBuilder.group({
      firstNameCtrl: ['', Validators.required],
      lastNameCtrl: ['', Validators.required]
    });
    this.thirdFormGroup = this._formBuilder.group({
      profilePictureCtrl: ['', Validators.required],
      bioCtrl: ['', Validators.required],
      addressCtrl: ['', Validators.required]
    });
  }

  submit(){
    return true;
  }
}
