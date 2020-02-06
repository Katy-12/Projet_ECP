import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactivityScaleComponent } from './reactivity-scale.component';

describe('ReactivityScaleComponent', () => {
  let component: ReactivityScaleComponent;
  let fixture: ComponentFixture<ReactivityScaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactivityScaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactivityScaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
