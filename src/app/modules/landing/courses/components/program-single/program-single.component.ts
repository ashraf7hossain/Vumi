import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-program-single',
  templateUrl: './program-single.component.html',
  styleUrls: ['./program-single.component.scss']
})
export class ProgramSingleComponent {
    @Input() header_month: string;

    @Input() program_dates: string;
    @Input() program_year: string;

    @Input() application_deadline: string;

    @Input() course_length: string;

    @Input() fee: string;

}
