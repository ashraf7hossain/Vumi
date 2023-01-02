import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-learn-from-single',
  templateUrl: './learn-from-single.component.html',
  styleUrls: ['./learn-from-single.component.scss']
})
export class LearnFromSingleComponent {
    @Input() name: string;
    @Input() position: string;
    @Input() org: string;
}
