import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Route, RouterModule } from '@angular/router';
import { ExampleComponent } from 'app/modules/admin/example/example.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'app/shared/shared.module';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';

const exampleRoutes: Route[] = [
    {
        path     : '',
        component: ExampleComponent
    }
];

@NgModule({
    declarations: [
        ExampleComponent
    ],
    imports     : [
        RouterModule.forChild(exampleRoutes),
        FormsModule,
        MatIconModule,
        MatButtonModule,
        MatCheckboxModule,
        MatFormFieldModule,
        SharedModule
    ]
})
export class ExampleModule
{
}
