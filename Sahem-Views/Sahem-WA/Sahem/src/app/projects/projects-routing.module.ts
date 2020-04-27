import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProjectsCategoryComponent } from './projects-category/projects-category.component';
import { ProjectsViewComponent } from './projects-view/projects-view.component';
import { ProjectComponent } from './project/project.component';
import { EditProjectComponent } from './edit-project/edit-project.component';
import { AddProjectComponent } from './add-project/add-project.component';

const routes: Routes = [
  {
    path: '',
    component: ProjectsViewComponent
  },
  {
    path: 'create',
    component: AddProjectComponent
  },
  {
    path: 'category',
    component: ProjectsCategoryComponent
  },
  {
    path: ':projectid',
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
