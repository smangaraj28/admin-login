import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AcmaterialModule} from './acmaterial/acmaterial.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {ActopnavComponent} from './actopnav/actopnav.component';
import {ActoolbarComponent} from './actoolbar/actoolbar.component';
import {AcusermenuComponent} from './actoolbar/acusermenu/acusermenu.component';
import {SideMenuComponent} from './side-menu/side-menu.component';
import {SideMenuItemsComponent} from './side-menu-items/side-menu-items.component';
import {DashboardSidenavComponent} from './dashboard-sidenav/dashboard-sidenav.component';
import {RouterModule} from '@angular/router';
import {DragDropDualListComponent} from './drag-drop-dual-list/drag-drop-dual-list.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        AcmaterialModule,
        FlexLayoutModule,
        RouterModule
    ],
    declarations: [
        ActopnavComponent,
        ActoolbarComponent,
        AcusermenuComponent,
        SideMenuComponent,
        SideMenuItemsComponent,
        DashboardSidenavComponent,
        DragDropDualListComponent
    ],
    exports: [
        FormsModule,
        ReactiveFormsModule,
        AcmaterialModule,
        FlexLayoutModule,
        ActopnavComponent,
        ActoolbarComponent,
        DashboardSidenavComponent,
        DragDropDualListComponent
    ]
})
export class AcsharedModule {
}
