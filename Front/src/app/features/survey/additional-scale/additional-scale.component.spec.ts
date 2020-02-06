import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdditionalScaleComponent } from './additional-scale.component';

describe('AdditionalScaleComponent', () => {
  let component: AdditionalScaleComponent;
  let fixture: ComponentFixture<AdditionalScaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdditionalScaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdditionalScaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
