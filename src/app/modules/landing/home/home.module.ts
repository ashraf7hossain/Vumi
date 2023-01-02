import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { LandingHomeComponent } from 'app/modules/landing/home/home.component';
import { landingHomeRoutes } from 'app/modules/landing/home/home.routing';
import { SharedModule } from 'app/shared/shared.module';
import { SwiperModule } from 'swiper/angular';

import { ExpertsMindsComponent } from './components/components/experts-minds/experts-minds.component';
import { PopularCoursesComponent } from './components/components/popular-courses/popular-courses.component';
import { SlideContentComponent } from './components/components/slide-content/slide-content.component';
@NgModule({
    declarations: [
        LandingHomeComponent,
        PopularCoursesComponent,
        SlideContentComponent,
        ExpertsMindsComponent
    ],
    imports     : [
        RouterModule.forChild(landingHomeRoutes),
        MatButtonModule,
        MatIconModule,
        SharedModule,
        SwiperModule
    ]
})
export class LandingHomeModule
{
}
