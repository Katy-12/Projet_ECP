import { Component, OnInit } from '@angular/core';
import { QuestionServiceReac } from '../shared/services/questionReac.service';

@Component({
  selector: 'app-reactivity-scale',
  templateUrl: './reactivity-scale.component.html',
  styleUrls: ['./reactivity-scale.component.scss']
})
export class ReactivityScaleComponent {

 public score =  {
    cat1: null,
    cat2: null,
    cat3: null,
    cat4: null,
    cat5: null,
    cat6: null,
    cat7: null,
    cat8: null,
    cat9: null,
    cat10: null,
  };

  public questions1: any;
  public questions2: any;
  public questions3: any;
  public questions4: any;
  public questions5: any;
  public questions6: any;
  public questions7: any;
  public questions8: any;
  public questions9: any;
  public questions10: any;

  constructor(service: QuestionServiceReac) {
    this.questions1 = service.getQuestions1();
    this.questions2 = service.getQuestions2();
    this.questions3 = service.getQuestions2();
    this.questions4 = service.getQuestions2();
    this.questions5 = service.getQuestions2();
    this.questions6 = service.getQuestions2();
    this.questions7 = service.getQuestions2();
    this.questions8 = service.getQuestions2();
    this.questions9 = service.getQuestions2();
    this.questions10 = service.getQuestions2();
  }

  save(data: any) {
    if (data.id == 1) {
      this.score.cat1 = data.score;
    }
    if (data.id == 2) {
      this.score.cat2 = data.score;
    }
    if (data.id == 3) {
      this.score.cat3 = data.score;
    }
    if (data.id == 4) {
      this.score.cat4 = data.score;
    }
    if (data.id == 5) {
      this.score.cat5 = data.score;

    }
    if (data.id == 6) {
      this.score.cat6 = data.score;

    }
    if (data.id == 7) {
      this.score.cat7 = data.score;

    }
    if (data.id == 8) {
      this.score.cat8 = data.score;

    }
    if (data.id == 9) {
      this.score.cat9 = data.score;

    }
    if (data.id == 10) {
      this.score.cat10 = data.score;
    }
    console.log(this.score);
  }


}
