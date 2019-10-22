import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {AcsharedModule} from '../../../acshared';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {MAT_SNACK_BAR_DATA} from '@angular/material';
import {NewProductComponent} from './new-product/new-product.component';
import {NewCompositeProductComponent} from './new-composite-product/new-composite-product.component';

export const DASHBOARD_ROUTES: Routes = [
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
        NewProductComponent,
        NewCompositeProductComponent
    ],
    entryComponents: [],
    providers: [{provide: MAT_SNACK_BAR_DATA, useValue: {}}],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class InventoryModule {
}
