import { Component, OnDestroy, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
    selector: 'vumi-layout',
    templateUrl: './vumi.component.html',
    styleUrls: ['./vumi.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class VumiLayoutComponent implements OnDestroy {
    private _unsubscribeAll: Subject<any> = new Subject<any>();

    /**
     * Constructor
     */
    constructor() {}

    isExpand: boolean = false;

    expandMenu(){
        this.isExpand = !this.isExpand;
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On destroy
     */
    ngOnDestroy(): void {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next(null);
        this._unsubscribeAll.complete();
    }
}
