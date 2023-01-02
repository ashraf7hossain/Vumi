import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-popular-courses',
  templateUrl: './popular-courses.component.html',
  styleUrls: ['./popular-courses.component.scss']
})
export class PopularCoursesComponent {
  @Input()title1: string = "";
  @Input()title2: string = "";
  @Input()subtitle: string = "";
}
