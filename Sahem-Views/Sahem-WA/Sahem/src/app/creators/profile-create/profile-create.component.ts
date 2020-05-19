import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { CreatorsService } from '../creators.service';
import { Creator } from 'src/app/Models/User/Creator';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-create',
  templateUrl: './profile-create.component.html',
  styleUrls: ['./profile-create.component.css']
})
export class ProfileCreateComponent implements OnInit {
  profile: FormGroup;
  startDate = new Date(1990, 0, 1);
  showFiller = false;
  breakpoint = 2;
  breakpoint2 = "2:3";
  creator: Creator;
  imageLink: string;
  profileError: string;
  constructor(private creatorService: CreatorsService, private cd: ChangeDetectorRef, private router: Router) { }

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
      creator_tag: new FormControl('', [
        Validators.required,
      ]),
      bio: new FormControl('', [
        Validators.required
      ]),
      avatar: new FormControl('', [Validators.required]),
      file: new FormControl('', [Validators.required]),
      first_name: new FormControl('', [Validators.required]),
      last_name: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]),
      birthday: new FormControl('', [Validators.required]),
    });
  }

  submit() {
    if (this.profile.invalid) {
      console.log("error");
      this.profileError = 'Form is invalid';
      return;
    }
    const formData = new FormData();
    formData.append('creator_tag', this.profile.get('creator_tag').value);
    formData.append('bio', this.profile.get('bio').value);
    formData.append('first_name', this.profile.get('first_name').value);
    formData.append('last_name', this.profile.get('last_name').value);
    formData.append('address', this.profile.get('address').value);
    formData.append('birthday', this.profile.get('birthday').value);
    formData.append('avatar', this.profile.get('file').value, 'avatar' + this.profile.get('creator_tag').value);

    this.creatorService.createCreator(formData)
      .subscribe(() => {
        console.log('you here');
        this.router.navigate(['/']);
      });
  }
  get f() {
    return this.profile.controls;
  }
  onHeaderImageChange(event) {
    const reader = new FileReader();
    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;

      reader.readAsDataURL(file);
      reader.onload = () => {
        console.log(file);
        this.profile.patchValue({
          file: file
        });
        // console.log(file);
        this.cd.markForCheck();
      };
    }
  }

  onResize(event) {
    this.breakpoint = (event.target.innerWidth <= 900) ? 1 : 2;
    this.breakpoint2 = (window.innerWidth <= 900) ? "2:3" : "fit";

  }
}
