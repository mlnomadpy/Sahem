import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FundComponent } from './fund/fund.component';
import { FormsModule } from '@angular/forms';
import { FinalStepComponent } from './final-step/final-step.component';
import { MaterialModule } from '../material.module';



@NgModule({
  declarations: [FundComponent, FinalStepComponent],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule
  ]
})
export class FundModule { }
