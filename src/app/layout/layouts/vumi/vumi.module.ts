import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { FuseLoadingBarModule } from '@fuse/components/loading-bar';
import { SharedModule } from 'app/shared/shared.module';
import { VumiLayoutComponent } from './vumi.component';
@NgModule({
    declarations: [VumiLayoutComponent],
    imports: [
        RouterModule,
        FuseLoadingBarModule,
        SharedModule,
        MatIconModule
    ],
    exports: [VumiLayoutComponent],
})
export class VumiLayoutModule {}
