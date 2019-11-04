import {OrderResolver} from './service/order-resolver.service';
import {BillingComponent} from './billing/billing.component';
import {RouterModule, Routes} from '@angular/router';
import {PosWindowComponent} from './pos-window/pos-window.component';
import {AcsharedModule} from '../../acshared';
import {CommonModule} from '@angular/common';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SnackBarComponent} from './snack-bar/snack-bar.component';
import {ItemsComponent} from './items/items.component';
import {MAT_SNACK_BAR_DATA} from '@angular/material';
import {HistoryComponent} from './history/history.component';
import {TicketComponent} from './ticket/ticket.component';
import {LineItemModalComponent} from './history/line-item-modal/line-item-modal.component';
import {ItemsResolver} from './service/items-resolver.service';
import {HttpClientModule} from '@angular/common/http';
import {PosViewComponent} from './pos-view.component';

export const DASHBOARD_ROUTES: Routes = [
    {
        path: '', component: PosViewComponent,
        children: [
            {
                path: '',
                redirectTo: 'billing',
                pathMatch: 'full'
            },
            {
                path: 'billing',
                component: BillingComponent,
                resolve: {resolvedData: ItemsResolver}
            },
            {
                path: 'add',
                component: ItemsComponent,
                resolve: {resolvedData: ItemsResolver}
            },
            {
                path: 'transactions',
                component: HistoryComponent,
                resolve: {resolvedOrder: OrderResolver}
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
        PosViewComponent,
        BillingComponent,
        PosWindowComponent,
        TicketComponent,
        ItemsComponent,
        HistoryComponent,
        LineItemModalComponent,
        SnackBarComponent
    ],
    entryComponents: [
        LineItemModalComponent,
        SnackBarComponent
    ],
    providers: [{provide: MAT_SNACK_BAR_DATA, useValue: {}}],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PosModule {
}
