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


@NgModule({
  declarations: [ProjectsComponent, ProjectComponent, ProjectModalComponent, AddProjectComponent, EditProjectComponent, ProjectsViewComponent, ProjectsCategoryComponent],
  imports: [
    CommonModule,
    ProjectsRoutingModule
  ]
})
export class ProjectsModule { }
