import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
    {
        path: 'home',
        loadChildren: () => import('./feature/acnologin/acnologin.module').then(m => m.AcnologinModule)
    },
    {
        path: 'login',
        loadChildren: () => import('./feature/acauth/auth.module').then(m => m.AuthModule)
    },
    {
        path: 'admin',
        loadChildren: () => import('./feature/dashboard/dashboard.module').then(m => m.DashboardModule)
    },
    {
        path: 'pos',
        loadChildren: () => import('./feature/pos-dashboard/pos-dashboard.module').then(m => m.PosDashboardModule)
    },
    {
        path: 'inventory',
        loadChildren: () => import('./feature/inventory-dashboard/inventory-dashboard.module').then(m => m.InventoryDashboardModule)
    },

    /*
    { path: 'allow',
      loadChildren: () => import('./feature/dashboard/dashboard.module').then(m => m.DashboardModule)
    },
    { path: 'kanban',
      loadChildren: () => import('./feature/nkanban/nkanban.module').then(m => m.NkanbanModule)
    }
    */
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { /*enableTracing: true /*,onSameUrlNavigation: ‘reload’*/})],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
