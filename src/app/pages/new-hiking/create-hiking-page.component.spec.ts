import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateHikingPage } from './create-hiking-page.component';

describe('CreateHikingPage', () => {
  let component: CreateHikingPage;
  let fixture: ComponentFixture<CreateHikingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateHikingPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateHikingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
