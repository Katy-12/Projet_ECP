import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GognitiveSkillScaleComponent } from './gognitive-skill-scale.component';

describe('GognitiveSkillScaleComponent', () => {
  let component: GognitiveSkillScaleComponent;
  let fixture: ComponentFixture<GognitiveSkillScaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GognitiveSkillScaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GognitiveSkillScaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
