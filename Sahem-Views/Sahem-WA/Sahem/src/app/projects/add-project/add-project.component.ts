import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ProjectsService } from '../projects.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit {
  myForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private httpClient: HttpClient, private projectsService: ProjectsService) { }

  ngOnInit(): void {
    this.myForm = new FormGroup({
      title: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      content: new FormControl('', [Validators.required]),
      endDate: new FormControl('', [Validators.required]),
      goal: new FormControl('', [Validators.required]),
      headerImage: new FormControl('', [Validators.required]),
      thumbnail: new FormControl('', [Validators.required])
    });
  }

  get f() {
    return this.myForm.controls;
  }

  onFileChange(event) {

    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.myForm.patchValue({
        fileSource: file
      });
    }



  }

  onSubmit() {
    const formData = new FormData();
    formData.append('title', this.myForm.get('title').value);
    formData.append('description', this.myForm.get('description').value);
    formData.append('content', this.myForm.get('content').value);
    formData.append('endDate', this.myForm.get('endDate').value);
    formData.append('goal', this.myForm.get('goal').value);
    formData.append('headerImage', this.myForm.get('headerImage').value);
    formData.append('thumbnail', this.myForm.get('thumbnail').value);

    this.projectsService.createProjectForm(formData);
    
  }

}
