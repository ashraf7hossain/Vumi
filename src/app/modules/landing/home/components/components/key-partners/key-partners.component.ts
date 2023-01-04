import { Component, ViewChild } from '@angular/core';
import { SwiperComponent } from 'swiper/angular';
// import Swiper core and required modules
import SwiperCore, { Virtual } from 'swiper';

// install Swiper modules
SwiperCore.use([Virtual]);
@Component({
    selector: 'app-key-partners',
    templateUrl: './key-partners.component.html',
    styleUrls: ['./key-partners.component.scss'],
    // encapsulation: ViewEncapsulation.None
})
export class KeyPartnersComponent {
    @ViewChild('swiper', { static: false }) swiper?: SwiperComponent;
    slideNext() {
        this.swiper.swiperRef.slideNext(100);
    }
    slidePrev() {
        this.swiper.swiperRef.slidePrev(100);
    }
}
