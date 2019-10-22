import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryTopNavComponent } from './inventory-top-nav.component';

describe('TopNavComponent', () => {
  let component: InventoryTopNavComponent;
  let fixture: ComponentFixture<InventoryTopNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventoryTopNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryTopNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
