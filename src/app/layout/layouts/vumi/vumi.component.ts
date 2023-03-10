import { Component, OnDestroy, ViewEncapsulation } from '@angular/core';
import { TranslateService } from '@ngx-translate/core/public_api';
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
    constructor(private translateService: TranslateService) {
        this.translateService.setDefaultLang('en');
        this.translateService.use(localStorage.getItem('lang') || 'en');
    }

    isExpand: boolean = false;
    menuIcon: string = 'heroicons_solid:menu';

    expandMenu() {
        this.isExpand = !this.isExpand;
        if (this.menuIcon === 'heroicons_solid:menu') {
            this.menuIcon = 'heroicons_solid:x';
        } else {
            this.menuIcon = 'heroicons_solid:menu';
        }
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
