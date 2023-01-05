import { Component, ViewChild } from '@angular/core';
import { SwiperComponent } from 'swiper/angular';
// import Swiper core and required modules
import SwiperCore, { Virtual } from 'swiper';

// install Swiper modules
SwiperCore.use([Virtual]);
@Component({
    selector: 'app-testimonials',
    templateUrl: './testimonials.component.html',
    styleUrls: ['./testimonials.component.scss'],
    // encapsulation: ViewEncapsulation.None
})
export class TestimonialsComponent {
    @ViewChild('swiper', { static: false }) swiper?: SwiperComponent;
    slidePrevTestimonials() {
        this.swiper.swiperRef.slidePrev(100);
    }
    slideNextTestimonials() {
        this.swiper.swiperRef.slideNext(100);
    }
}
