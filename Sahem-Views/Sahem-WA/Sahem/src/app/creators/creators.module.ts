import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreatorsRoutingModule } from './creators-routing.module';
import { CreatorsComponent } from './creators.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileCreateComponent } from './profile-create/profile-create.component';
import { ProfileEditComponent } from './profile-edit/profile-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from "../material.module";
import { ProjectCardComponent } from './project-card/project-card.component';


@NgModule({
  declarations: [
    CreatorsComponent,
    ProfileComponent,
    ProfileCreateComponent,
    ProfileEditComponent,
    ProjectCardComponent
  ],
  imports: [
    CommonModule,
    CreatorsRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule
  ]
})
export class CreatorsModule { }
