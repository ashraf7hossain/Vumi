import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlideComponent } from './slide.component';
import { SwiperModule } from 'swiper/angular';
import { SlideContentComponent } from '../slide-content/slide-content.component';

@NgModule({
  declarations: [
    SlideComponent,
    SlideContentComponent
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
