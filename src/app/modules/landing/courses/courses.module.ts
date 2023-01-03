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
import { WhoWillBeBenefitedComponent } from './components/who-will-be-benefited/who-will-be-benefited.component';
import { SyllabusComponent } from './components/syllabus/syllabus.component';
import { SyllabusSingleComponent } from './components/syllabus-single/syllabus-single.component';
import { CertificateComponent } from './components/certificate/certificate.component';
import { LearnFromComponent } from './components/learn-from/learn-from.component';
import { LearnFromSingleComponent } from './components/learn-from-single/learn-from-single.component';
import { SlideModule } from './components/slide/slide.module';


@NgModule({
  declarations: [
    CoursesComponent,
    CourseOverviewComponent,
    WhatWillYouLearnComponent,
    ProgramStructureComponent,
    ProgramSingleComponent,
    LiveVideoComponent,
    WhoWillBeBenefitedComponent,
    SyllabusComponent,
    SyllabusSingleComponent,
    CertificateComponent,
    LearnFromComponent,
    LearnFromSingleComponent,
  ],
  imports: [
    CommonModule,
    CourseFeaturesModule,
    RouterModule.forChild(CoursesRoutes),
    SlideModule
  ],
})
export class CoursesModule { }
