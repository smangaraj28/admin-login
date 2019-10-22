import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {InventorySideMenuItemsComponent} from './inventory-side-menu-items/inventory-side-menu-items.component';
import {InventoryDashboardSidenavComponent} from './inventory-dashboard-sidenav/inventory-dashboard-sidenav.component';
import {AcsharedModule} from '../../acshared';
import {InventoryToolBarComponent} from './inventory-tool-bar/inventory-tool-bar.component';
import {InventoryUserMenuComponent} from './inventory-tool-bar/inventory-user-menu/inventory-user-menu.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {InventoryDashboardViewComponent} from './inventory-dashboard-view.component';
import {InventorySideMenuComponent} from './inventory-side-menu/inventory-side-menu.component';
import {InventoryTopNavComponent} from './inventory-top-nav/inventory-top-nav.component';

export const DASHBOARD_ROUTES: Routes = [
    {
        path: '', component: InventoryDashboardViewComponent,
        children: [
            {
                path: '',
                redirectTo: 'inventory',
                pathMatch: 'full'
            },
            {
                path: 'inventory',
                loadChildren: () => import('./inventory/inventory.module').then(m => m.InventoryModule)
            }
        ]
    }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'}),
        AcsharedModule,
        RouterModule.forChild(DASHBOARD_ROUTES)
    ],
    declarations: [
        InventoryDashboardViewComponent,
        InventorySideMenuComponent,
        InventorySideMenuItemsComponent,
        InventoryDashboardSidenavComponent,
        InventoryTopNavComponent,
        InventoryToolBarComponent,
        InventoryUserMenuComponent
    ]
})
export class InventoryDashboardModule {
}
