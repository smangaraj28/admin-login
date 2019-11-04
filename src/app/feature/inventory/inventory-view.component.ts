import {Component} from '@angular/core';


@Component({
    selector: 'app-inventory-dashboard-view',
    templateUrl: './inventory-view.component.html',
    styleUrls: ['./inventory-view.component.scss']
})
export class InventoryViewComponent {
    menus = [
        {
            'name': 'New Products',
            'link': '/inventory/newProduct',
            'icon': 'P',
            'chip': false,
            'open': true
        },
        {
            'name': 'New Composite Products',
            'link': '/inventory/newCompositeProduct',
            'icon': 'CP',
            'chip': false,
            'open': true
        }
    ];
    sidenavRequired = true;
    sidebarRequired = true;
}
