import { Component, Input } from '@angular/core';
import { SlideRectComponent } from '../slide-rect/slide-rect.component';

@Component({
  selector: 'app-slide-content',
  templateUrl: './slide-content.component.html',
  styleUrls: ['./slide-content.component.scss']
})
export class SlideContentComponent {

  @Input()title: string = "";
  @Input()subtitle: string = "";
  @Input()para: string = "";

}
