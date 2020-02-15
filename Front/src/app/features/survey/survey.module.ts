import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SurveyRoutingModule } from './survey-routing.module';
import { SurveyComponent } from './survey.component';
import { MatTabsModule } from '@angular/material/tabs';
import { ReactivityScaleComponent } from './reactivity-scale/reactivity-scale.component';
import { GognitiveSkillScaleComponent } from './gognitive-skill-scale/gognitive-skill-scale.component';
import { AdditionalScaleComponent } from './additional-scale/additional-scale.component';
import { QuestionsComponent } from './questions/questions.component';
import { MatRadioModule } from '@angular/material/radio';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule, MatStepperModule, MatButtonModule } from '@angular/material';
import { DynamicFormComponent } from './shared/components/dynamic-form/dynamic-form.component';
import { DynamicFormQuestionComponent } from './shared/components/dynamic-form-question/dynamic-form-question.component';
import { QuestionService } from './shared/services/question.service';
import { QuestionServiceReac } from './shared/services/questionReac.service';
import { StatsComponent } from './stats/stats.component';
import { HighchartsChartModule } from 'highcharts-angular';


const materialsModules = [
  MatRadioModule,
  MatTabsModule,
  MatSelectModule,
  MatStepperModule,
  MatButtonModule
];
@NgModule({
  declarations: [SurveyComponent, ReactivityScaleComponent, GognitiveSkillScaleComponent, AdditionalScaleComponent, QuestionsComponent, DynamicFormComponent, DynamicFormQuestionComponent, StatsComponent],
  imports: [
    CommonModule,
    SurveyRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ...materialsModules,
    HighchartsChartModule
  ],
  providers: [
    QuestionService,
    QuestionServiceReac

  ]
})
export class SurveyModule { }
