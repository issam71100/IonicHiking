import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateHickingPage } from './update-hicking-page.component';

describe('UpdateHickingPage', () => {
  let component: UpdateHickingPage;
  let fixture: ComponentFixture<UpdateHickingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateHickingPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateHickingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
