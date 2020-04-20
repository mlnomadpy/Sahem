import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProjectsCategoryComponent } from './projects-category/projects-category.component';
import { ProjectsViewComponent } from './projects-view/projects-view.component';
import { ProjectComponent } from './project/project.component';
import { EditProjectComponent } from './edit-project/edit-project.component';
import { AddProjectComponent } from './add-project/add-project.component';

const routes: Routes = [
  {
    path: 'projects',
    component: ProjectsViewComponent
  },
  {
    path: 'projects/create',
    component: AddProjectComponent
  },
  {
    path: 'projects/category',
    component: ProjectsCategoryComponent
  },
  {
    path: 'projects/:projectid',
    component: ProjectComponent
  },
  {
    path: 'projects/:projectid/edit',
    component: EditProjectComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }
