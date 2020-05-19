import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ProjectsService } from '../projects.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit {
  myForm: FormGroup;
  header_image: File;
  thumbnail: File;
  constructor(private cd: ChangeDetectorRef, private formBuilder: FormBuilder, private projectsService: ProjectsService, private router: Router) { }

  ngOnInit(): void {
    this.myForm = new FormGroup({
      title: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      content: new FormControl('', [Validators.required]),
      endDate: new FormControl('', [Validators.required]),
      fundGoal: new FormControl('', [Validators.required]),
      file_header_image: new FormControl('', [Validators.required]),
      header_image: new FormControl(null, [Validators.required]),
      file_thumbnail: new FormControl('', [Validators.required]),
      thumbnail: new FormControl(null, [Validators.required]),
      category: new FormControl('', [Validators.required]),
    });
  }

  get f() {
    return this.myForm.controls;
  }

  onHeaderImageChange(event) {
    const reader = new FileReader();
    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.myForm.patchValue({
          file_header_image: file
        });
        // console.log(file);
        this.cd.markForCheck();
      };
    }
  }
  onThumbnailChange(event) {
    const reader = new FileReader();
    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.myForm.patchValue({
          file_thumbnail: file
        });
        // console.log(file);
        this.cd.markForCheck();
      };
    }
  }

  onSubmit() {
    // var fileInput = fileInput;
    const formData = new FormData();
    formData.append('title', this.myForm.get('title').value);
    formData.append('description', this.myForm.get('description').value);
    formData.append('content', this.myForm.get('content').value);
    formData.append('endDate', this.myForm.get('endDate').value);
    formData.append('fundGoal', this.myForm.get('fundGoal').value);
    // console.log(this.myForm.get('headerImage').value as File);
    // const header_image =this.myForm.get('header_image').value;
    // console.log(header_image);
    formData.append('header_image', this.myForm.get('file_header_image').value, 'header_image' + this.myForm.get('endDate').value);
    formData.append('thumbnail', this.myForm.get('file_thumbnail').value, 'thumbnail' + this.myForm.get('endDate').value);
    formData.append('category', this.myForm.get('category').value);
    // console.log(formData);

    this.projectsService.createProjectForm(formData)
      .subscribe(() => {
        console.log('you here');
        this.router.navigate(['/']);
      }); 

  }

}
