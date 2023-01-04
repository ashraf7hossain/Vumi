import { Component, QueryList, ViewChildren } from '@angular/core';
import { LearnFromSingleComponent } from '../learn-from-single/learn-from-single.component';

@Component({
  selector: 'app-learn-from',
  templateUrl: './learn-from.component.html',
  styleUrls: ['./learn-from.component.scss']
})
export class LearnFromComponent {
    active_id: number = 1;

    onClick(element_id: number){
        this.active_id = element_id;
    }
}
