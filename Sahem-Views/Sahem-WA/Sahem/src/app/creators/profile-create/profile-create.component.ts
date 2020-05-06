import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { CreatorsService } from '../creators.service';
import { Creator } from 'src/app/Models/User/Creator';

@Component({
  selector: 'profile-create',
  templateUrl: './profile-create.component.html',
  styleUrls: ['./profile-create.component.css']
})
export class ProfileCreateComponent implements OnInit {
  profile: FormGroup;
  showFiller = false;
  breakpoint = 2;
  breakpoint2 = "2:3";
  creator: Creator;
  imageLink: string;
  constructor(private creatorService: CreatorsService) { }

  ngOnInit(): void {
    this.breakpoint = (window.innerWidth <= 900) ? 1 : 2;
    this.breakpoint2 = (window.innerWidth <= 900) ? "2:3" : "fit";
    /**
           * creator_tag: req.body.creator_tag,
          bio: req.body.bio,
          avatar: avatar
          personal_information.first_name = req.body.first_name;
          personal_information.last_name = req.body.last_name;
          personal_information.address = req.body.address;
          personal_information.birthday = req.body.birthday;
           */
    this.profile = new FormGroup({
      creator_tag: new FormControl('', [Validators.required]),
      bio: new FormControl('', [Validators.required]),
      avatar: new FormControl('', [Validators.required]),
      first_name: new FormControl('', [Validators.required]),
      last_name: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]),
      birthday: new FormControl('', [Validators.required])
    });
  }

  submit() {

  }


  onResize(event) {
    this.breakpoint = (event.target.innerWidth <= 900) ? 1 : 2;
    this.breakpoint2 = (window.innerWidth <= 900) ? "2:3" : "fit";

  }
}
