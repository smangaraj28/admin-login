import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryToolBarComponent } from './inventory-tool-bar.component';

describe('ToolBarComponent', () => {
  let component: InventoryToolBarComponent;
  let fixture: ComponentFixture<InventoryToolBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventoryToolBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryToolBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
