import { Component, OnInit } from '@angular/core';
import { QuestionServiceAdd } from '../shared/services/questionAdd.service';

@Component({
  selector: 'app-additional-scale',
  templateUrl: './additional-scale.component.html',
  styleUrls: ['./additional-scale.component.scss']
})
export class AdditionalScaleComponent {

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
  
  

  constructor(service: QuestionServiceAdd) {
    this.questions1 = service.getQuestions1();
    
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
