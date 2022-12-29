import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { NgForm, UntypedFormGroup } from '@angular/forms';

@Component({
    selector     : 'example',
    templateUrl  : './example.component.html',
    encapsulation: ViewEncapsulation.None
})
export class ExampleComponent
{
    /**
     * Constructor
     */
    @ViewChild('signInNgForm') signInNgForm: NgForm;

    signInForm: UntypedFormGroup;


    constructor()
    {
    }

    signIn(){
        
    }
}
