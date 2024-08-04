import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceTypeListComponentComponent } from './device-type-list-component.component';

describe('DeviceTypeListComponentComponent', () => {
  let component: DeviceTypeListComponentComponent;
  let fixture: ComponentFixture<DeviceTypeListComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeviceTypeListComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeviceTypeListComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
