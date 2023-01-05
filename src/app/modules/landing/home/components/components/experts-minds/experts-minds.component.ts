import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { SwiperComponent } from 'swiper/angular';
// import Swiper core and required modules
import SwiperCore, { Virtual } from 'swiper';

// install Swiper modules
SwiperCore.use([Virtual]);
@Component({
    selector: 'app-experts-minds',
    templateUrl: './experts-minds.component.html',
    styleUrls: ['./experts-minds.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class ExpertsMindsComponent {
    @ViewChild('swiper', { static: false }) swiper?: SwiperComponent;
    slideNextExperts() {
        this.swiper.swiperRef.slideNext(100);
    }
    slidePrevExperts() {
        this.swiper.swiperRef.slidePrev(100);
    }
}
