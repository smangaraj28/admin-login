import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSidenav} from '@angular/material';
import {Router} from '@angular/router';
import {GenericService} from '../../../accore';

export interface IModule {
    name: string;
    route: string;
    display: string;
    previewImage: string;
}

@Component({
    selector: 'app-auth-success',
    templateUrl: './auth-success.component.html',
    styleUrls: ['./auth-success.component.scss']
})
export class AuthSuccessComponent implements OnInit {

    @ViewChild(MatSidenav, {static: true}) sidenav: MatSidenav;
    events: string[] = [];
    opened = true;
    private moduleFlag = false;
    iModules: IModule[];
    modulesPreviewPath = '/assets/images/';

    constructor(private router: Router,
                private genericService: GenericService) {
    }

    static initializeModuleDetails() {
        return [
            {
                'name': 'Room Booking',
                'route': '/room',
                'display': 'Room Booking',
                'previewImage': 'bagel.jpg'
            },
            {
                'name': 'Inventory Management',
                'route': '/inventory',
                'display': 'Inventory Management',
                'previewImage': 'chocolate-croissant.jpg'
            },
            {
                'name': 'Hotel POS',
                'route': '/pos',
                'display': 'Hotel POS',
                'previewImage': 'cortado.jpg'
            },
            {
                'name': 'Super Market POS',
                'route': '/superMarket',
                'display': 'Super Market POS',
                'previewImage': 'croissant.jpg'
            },
            {
                'name': 'Reports',
                'route': '/reports',
                'display': 'Reports',
                'previewImage': 'sausage-egg.jpg'
            },
            {
                'name': 'Accounting',
                'route': '/admin',
                'display': 'Accounting',
                'previewImage': 'tea.jpg'
            }
        ];
    }

    ngOnInit() {
        console.log(this.genericService.nav_dest);
        this.genericService.nav_dest = 'module';
        if (this.genericService.nav_dest === 'entity') {
            this.router.navigate(['/admin/admin/entity']);
        } else if (this.genericService.nav_dest === 'package') {
            this.router.navigate(['/admin/admin/payment']);
        } else if (this.genericService.nav_dest === 'branch') {
            this.router.navigate(['/admin/admin/branch']);
        } else if (this.genericService.nav_dest === 'module') {
            this.moduleFlag = true;
            this.iModules = AuthSuccessComponent.initializeModuleDetails();
        } else {
            this.moduleFlag = true;
            this.iModules = AuthSuccessComponent.initializeModuleDetails();
        }
    }
}
