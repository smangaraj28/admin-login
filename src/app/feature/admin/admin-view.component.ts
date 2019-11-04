import {Component} from '@angular/core';


@Component({
    selector: 'app-dashboard-view',
    templateUrl: './admin-view.component.html',
    styleUrls: ['./admin-view.component.scss']
})
export class AdminViewComponent {
    menus = [
        {
            'name': 'Entity',
            'link': '/admin/entity',
            'icon': 'E',
            'chip': false,
            'open': true,
        },
        {
            'name': 'Branch',
            'link': '/admin/branch',
            'icon': 'B',
            'chip': false,
            'open': true,
        },
        {
            'name': 'Roles',
            'link': '/admin/role',
            'icon': 'R',
            'chip': false,
            'open': true,
        },
        {
            'name': 'Users',
            'link': '/admin/user',
            'icon': 'U',
            'chip': false,
            'open': true,
        },
        {
            'name': 'Billing',
            'icon': 'Billing',
            'link': false,
            'open': false,
            'chip': {'value': 17, 'color': 'accent'},
            'sub': [
                {
                    'name': 'Package',
                    'link': '/admin/payment',
                    'icon': 'P',
                    'chip': false,
                    'open': false,
                }
            ]
        }
    ];

    sidenavRequired = true;
    sidebarRequired = true;
}
