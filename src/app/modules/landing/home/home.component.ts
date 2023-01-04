import { Component, ViewEncapsulation } from '@angular/core';
import SwiperCore, { A11y, Navigation, Pagination, Scrollbar } from 'swiper';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

@Component({
    selector     : 'landing-home',
    templateUrl  : './home.component.html',
    styleUrls: ['./home.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class LandingHomeComponent
{
    title = 'finalAngular';
}
