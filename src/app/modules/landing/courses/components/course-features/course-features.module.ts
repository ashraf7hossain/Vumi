import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatGridListModule} from '@angular/material/grid-list';
import { CourseFeaturesComponent } from './course-features.component';
import { CourseSingleFeatureComponent } from '../course-single-feature/course-single-feature.component';

@NgModule({
  declarations: [
    CourseFeaturesComponent,
    CourseSingleFeatureComponent ],
  exports: [CourseFeaturesComponent],
  imports: [
    CommonModule,
    MatGridListModule
  ]
})
export class CourseFeaturesModule { }
