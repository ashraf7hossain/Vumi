import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-course-single-feature',
  templateUrl: './course-single-feature.component.html',
  styleUrls: ['./course-single-feature.component.scss']
})
export class CourseSingleFeatureComponent {
  @Input() imageURL: string = "";
  @Input() text: string = "";
}
