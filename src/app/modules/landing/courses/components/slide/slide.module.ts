import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlideComponent } from './slide.component';
import { SwiperModule } from 'swiper/angular';
import { SlideContentComponent } from '../slide-content/slide-content.component';
import { SlideRectComponent } from '../slide-rect/slide-rect.component';

@NgModule({
  declarations: [
    SlideComponent,
    SlideContentComponent,
    SlideRectComponent
  ],
  exports:[
    SlideComponent
  ],
  imports: [
    CommonModule,
    SwiperModule
  ]
})
export class SlideModule { }
