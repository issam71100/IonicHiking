import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapHikingComponent } from './map-hiking.component';

describe('MapHikingComponent', () => {
  let component: MapHikingComponent;
  let fixture: ComponentFixture<MapHikingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapHikingComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapHikingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
