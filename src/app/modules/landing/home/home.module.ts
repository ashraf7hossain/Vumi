import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { LandingHomeComponent } from 'app/modules/landing/home/home.component';
import { landingHomeRoutes } from 'app/modules/landing/home/home.routing';
import { SharedModule } from 'app/shared/shared.module';
import { SwiperModule } from 'swiper/angular';

import { DigitalLearningComponent } from './components/components/digital-learning/digital-learning.component';
import { ExpertsMindsComponent } from './components/components/experts-minds/experts-minds.component';
import { KeyPartnersComponent } from './components/components/key-partners/key-partners.component';
import { PopularCoursesComponent } from './components/components/popular-courses/popular-courses.component';
import { PotentialsComponent } from './components/components/potentials/potentials.component';
import { SlideContentComponent } from './components/components/slide-content/slide-content.component';
import { TestimonialsComponent } from './components/components/testimonials/testimonials.component';
@NgModule({
    declarations: [
        LandingHomeComponent,
        PopularCoursesComponent,
        SlideContentComponent,
        ExpertsMindsComponent,
        PotentialsComponent,
        TestimonialsComponent,
        KeyPartnersComponent,
        DigitalLearningComponent,
    ],
    imports: [
        RouterModule.forChild(landingHomeRoutes),
        MatButtonModule,
        MatIconModule,
        SharedModule,
        SwiperModule,
    ],
})
export class LandingHomeModule {}
