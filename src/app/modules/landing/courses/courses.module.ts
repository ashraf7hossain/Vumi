import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from './courses.component';
import { CoursesRoutes } from './courses.routing';
import { RouterModule } from '@angular/router';
import { CourseFeaturesModule } from './components/course-features/course-features.module';
import { CourseOverviewComponent } from './components/course-overview/course-overview.component';
import { WhatWillYouLearnComponent } from './components/what-will-you-learn/what-will-you-learn.component';
import { ProgramStructureComponent } from './components/program-structure/program-structure.component';
import { ProgramSingleComponent } from './components/program-single/program-single.component';
import { LiveVideoComponent } from './components/live-video/live-video.component';

@NgModule({
  declarations: [
    CoursesComponent,
    CourseOverviewComponent,
    WhatWillYouLearnComponent,
    ProgramStructureComponent,
    ProgramSingleComponent,
    LiveVideoComponent
  ],
  imports: [
    CommonModule,
    CourseFeaturesModule,
    RouterModule.forChild(CoursesRoutes),
  ],
})
export class CoursesModule { }
