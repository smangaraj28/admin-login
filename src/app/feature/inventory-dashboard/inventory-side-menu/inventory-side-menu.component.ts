import {Component, Input, OnInit} from '@angular/core';
import {Menus} from './inventory-menu-element';

import {Subscription} from 'rxjs';

@Component({
  selector: 'app-inventory-side-menu',
  templateUrl: './inventory-side-menu.component.html',
  styleUrls: ['./inventory-side-menu.component.scss']
})
export class InventorySideMenuComponent implements OnInit {

  @Input() iconOnly = false;
  public menus = Menus;


  userobservable: Subscription;

  constructor() {
  }


  ngOnInit() {
  }

}
