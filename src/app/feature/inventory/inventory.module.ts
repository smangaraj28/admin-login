import {InventoryViewComponent} from './inventory-view.component';
import {NewCompositeProductComponent} from './new-composite-product/new-composite-product.component';
import {RouterModule, Routes} from '@angular/router';
import {AcsharedModule} from '../../acshared';
import {CommonModule} from '@angular/common';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MAT_SNACK_BAR_DATA} from '@angular/material';
import {NewProductComponent} from './new-product/new-product.component';
import {HttpClientModule} from '@angular/common/http';

export const DASHBOARD_ROUTES: Routes = [
    {
        path: '', component: InventoryViewComponent,
        children: [
            {
                path: '',
                redirectTo: 'newProduct',
                pathMatch: 'full'
            },
            {
                path: 'newProduct',
                component: NewProductComponent
            },
            {
                path: 'newCompositeProduct',
                component: NewCompositeProductComponent
            }
        ]
    }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'}),
        AcsharedModule,
        RouterModule.forChild(DASHBOARD_ROUTES)
    ],
    declarations: [
        InventoryViewComponent,
        NewProductComponent,
        NewCompositeProductComponent
    ],
    entryComponents: [],
    providers: [{provide: MAT_SNACK_BAR_DATA, useValue: {}}],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class InventoryModule {
}
