import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-slide-content',
  templateUrl: './slide-content.component.html',
  styleUrls: ['./slide-content.component.scss']
  // encapsulation: ViewEncapsulation.None
})
export class SlideContentComponent {

  @Input()title: string = "";
  @Input()subtitle: string = "";
  @Input()para: string = "";

}
