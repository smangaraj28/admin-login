import {Component} from '@angular/core';

@Component({
    selector: 'app-pos-view',
    templateUrl: './pos-view.component.html',
    styleUrls: ['./pos-view.component.scss']
})
export class PosViewComponent {
    menus = [
        {
            'name': 'Billing',
            'link': '/pos/billing',
            'icon': 'dashboard',
            'chip': false,
            'open': true,
        },
        {
            'name': 'Add',
            'link': '/pos/Add',
            'icon': 'dashboard',
            'chip': false,
            'open': true,
        },
        {
            'name': 'Transactions',
            'link': '/pos/transactions',
            'icon': 'dashboard',
            'chip': false,
            'open': true,
        }
    ];
    sidenavRequired = true;
    sidebarRequired = true;
}
