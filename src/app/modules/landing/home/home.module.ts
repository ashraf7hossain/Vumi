import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { SharedModule } from 'app/shared/shared.module';
import { LandingHomeComponent } from 'app/modules/landing/home/home.component';
import { landingHomeRoutes } from 'app/modules/landing/home/home.routing';

import { PopularCoursesComponent } from './components/components/popular-courses/popular-courses.component';
import { SlideContentComponent } from './components/components/slide-content/slide-content.component';
@NgModule({
    declarations: [
        LandingHomeComponent,
        PopularCoursesComponent,
        SlideContentComponent
    ],
    imports     : [
        RouterModule.forChild(landingHomeRoutes),
        MatButtonModule,
        MatIconModule,
        SharedModule
    ]
})
export class LandingHomeModule
{
}
