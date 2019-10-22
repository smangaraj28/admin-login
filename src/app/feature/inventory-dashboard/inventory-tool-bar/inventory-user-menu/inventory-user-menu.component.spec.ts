import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryUserMenuComponent } from './inventory-user-menu.component';

describe('UserMenuComponent', () => {
  let component: InventoryUserMenuComponent;
  let fixture: ComponentFixture<InventoryUserMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventoryUserMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryUserMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
