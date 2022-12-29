import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from './courses.component';
import { CoursesRoutes } from './courses.routing';
import { RouterModule } from '@angular/router';
import { CourseFeaturesComponent } from './components/course-features/course-features.component';
import { CourseSingleFeatureComponent } from './components/course-single-feature/course-single-feature.component';
import { CourseOverviewComponent } from './components/course-overview/course-overview.component';
import { WhatWillYouLearnComponent } from './components/what-will-you-learn/what-will-you-learn.component';
import { ProgramStructureComponent } from './components/program-structure/program-structure.component';
import { ProgramSingleComponent } from './components/program-single/program-single.component';

@NgModule({
  declarations: [
    CoursesComponent,
    CourseFeaturesComponent,
    CourseSingleFeatureComponent,
    CourseOverviewComponent,
    WhatWillYouLearnComponent,
    ProgramStructureComponent,
    ProgramSingleComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(CoursesRoutes),
  ],
})
export class CoursesModule { }
