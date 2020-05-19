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
// import { ProjectsService } from './projects.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreatorCardComponent } from './creator-card/creator-card.component';
import { FundComponent } from './fund/fund.component';
import { NgxStripeModule } from 'ngx-stripe';
import { PipesModule } from '../pipes/pipes.module';
// import { ShareButtonModule } from '@ngx-share/button';
import { ShareButtonsModule } from 'ngx-sharebuttons/buttons';
import { ShareButtonModule } from 'ngx-sharebuttons/button';
import { ShareIconsModule } from 'ngx-sharebuttons/icons';
// import { HttpModule } from '@angular/common/http/http';


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
    NgxStripeModule.forRoot('pk_test_tXj8N60xSzLiRJWozIpiQWia00uEqdqOvw'),
    ReactiveFormsModule,
    PipesModule,
    ShareButtonsModule,
    ShareButtonsModule.withConfig({
      debug: true
    }),
    ShareButtonModule,
    ShareIconsModule.forRoot(),
    // ShareButtonModule
  ],
  providers: [
    // ProjectsService
  ],
})
export class ProjectsModule { }
