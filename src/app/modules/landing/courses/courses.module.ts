import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from './courses.component';
import { CoursesRoutes } from './courses.routing';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    CoursesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(CoursesRoutes),
  ],
})
export class CoursesModule { }
