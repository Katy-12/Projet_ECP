import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistterComponent } from './registter.component';

describe('RegistterComponent', () => {
  let component: RegistterComponent;
  let fixture: ComponentFixture<RegistterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
