import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './projects.component';
import { ProjectComponent } from './project/project.component';
import { ProjectModalComponent } from './project-modal/project-modal.component';
import { AddProjectComponent } from './add-project/add-project.component';
import { EditProjectComponent } from './edit-project/edit-project.component';
import { ProjectsViewComponent } from './projects-view/projects-view.component';
import { ProjectsCategoryComponent } from './projects-category/projects-category.component';
import { ProjectShareComponent } from './project-share/project-share.component';
import { ProjectCardComponent } from './project-card/project-card.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { MaterialModule } from '../material.module';
import { ImageUploadComponent } from './image-upload/image-upload.component';

import { HttpClientModule } from '@angular/common/http';
import { ProjectsService } from './projects.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreatorCardComponent } from './creator-card/creator-card.component';
import { FundComponent } from './fund/fund.component';


@NgModule({
  declarations: [
    ProjectsComponent,
    ProjectComponent,
    ProjectModalComponent,
    AddProjectComponent,
    EditProjectComponent,
    ProjectsViewComponent,
    ProjectsCategoryComponent,
    ProjectShareComponent,
    ProjectCardComponent,
    ProgressBarComponent,
    ImageUploadComponent,
    CreatorCardComponent,
    FundComponent
  ],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    ProjectsService
  ],
})
export class ProjectsModule { }
