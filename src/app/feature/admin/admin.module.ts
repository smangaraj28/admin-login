import {RouterModule, Routes} from '@angular/router';
import {AcsharedModule} from '../../acshared';
import {CommonModule} from '@angular/common';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {PaymentComponent} from './billing/payment/payment.component';
import {RoleTableDeleteDialogComponent} from './admin-table/role-table/dialogs/delete/role-table-delete-dialog.component';
import {ModuleTableExpandableRowsComponent} from './admin-table/role-table/module-table-expandable-rows/module-table-expandable-rows.component';
import {EntityBranchResolver} from './admin-table/entity-branch-table/services/entity-branch.resolver';
import {RoleTableComponent} from './admin-table/role-table/role-table.component';
import {AdminViewComponent} from './admin-view.component';
import {EntityBranchTableComponent} from './admin-table/entity-branch-table/entity-branch-table.component';
import {EntityBranchTableDeleteDialogComponent} from './admin-table/entity-branch-table/dialogs/delete/entity-branch-table-delete-dialog.component';
import {EntityResolver} from './admin-table/entity-table/services/entity.resolver';
import {EntityTableDeleteDialogComponent} from './admin-table/entity-table/dialogs/delete/entity-table-delete-dialog.component';
import {UserTableDeleteDialogComponent} from './admin-table/user-table/dialogs/delete/user-table-delete-dialog.component';
import {RoleResolver} from './admin-table/role-table/services/role.resolver';
import {UserTableExpandableRowsComponent} from './admin-table/user-table/user-table-expandable-rows/user-table-expandable-rows.component';
import {UserTableComponent} from './admin-table/user-table/user-table.component';
import {UserResolver} from './admin-table/user-table/services/user.resolver';
import {FlexLayoutModule} from '@angular/flex-layout';
import {HttpClientModule} from '@angular/common/http';
import {EntityTableComponent} from './admin-table/entity-table/entity-table.component';

export const DASHBOARD_ROUTES: Routes = [
    {
        path: '', component: AdminViewComponent,
        children: [
            {path: '', redirectTo: 'entity', pathMatch: 'full'},
            {
                path: 'entity',
                component: EntityTableComponent,
                resolve: {resolvedEntityData: EntityResolver}
            },
            {
                path: 'branch',
                component: EntityBranchTableComponent,
                resolve: {resolvedEntityBranchData: EntityBranchResolver}
            },
            {
                path: 'role',
                component: RoleTableComponent,
                resolve: {resolvedRoleData: RoleResolver}
            },
            {
                path: 'user',
                component: UserTableComponent,
                resolve: {resolvedUserData: UserResolver}
            },
            {
                path: 'payment',
                component: PaymentComponent
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
        FlexLayoutModule,
        RouterModule.forChild(DASHBOARD_ROUTES)
    ],
    declarations: [
        UserTableComponent,
        EntityTableComponent,
        EntityTableDeleteDialogComponent,
        EntityBranchTableComponent,
        EntityBranchTableDeleteDialogComponent,
        RoleTableComponent,
        RoleTableDeleteDialogComponent,
        ModuleTableExpandableRowsComponent,
        UserTableExpandableRowsComponent,
        UserTableDeleteDialogComponent,
        PaymentComponent,
        AdminViewComponent
    ],
    entryComponents: [
        AdminViewComponent,
        EntityTableDeleteDialogComponent,
        EntityBranchTableDeleteDialogComponent,
        RoleTableDeleteDialogComponent,
        UserTableDeleteDialogComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AdminModule {
}
