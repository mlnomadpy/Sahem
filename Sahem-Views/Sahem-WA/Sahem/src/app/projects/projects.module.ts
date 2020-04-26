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
    ProgressBarComponent
  ],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    MaterialModule
  ]
})
export class ProjectsModule { }
