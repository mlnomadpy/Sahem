import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreatorsComponent } from './creators.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileCreateComponent } from './profile-create/profile-create.component';
import { ProfileEditComponent } from './profile-edit/profile-edit.component';

const routes: Routes = [
  {
   path: 'create',
    component: ProfileCreateComponent
  }, 
  {
    path: ':creatorid',
    component: ProfileComponent
  },
  {
    path: ':creatorid/edit',
    component: ProfileEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreatorsRoutingModule { }
