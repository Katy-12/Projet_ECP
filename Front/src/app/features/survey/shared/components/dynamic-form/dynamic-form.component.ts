import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { } from 'events';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent implements OnInit {

  @Input() questions: any[] = [];
  @Output() saveEvent: EventEmitter<any> = new EventEmitter<any>();

  public form: FormGroup;

  ngOnInit() {
    this.form = this.toFormGroup(this.questions);
    // this.form.valueChanges.subscribe(data => console.log(data))
  }

  toFormGroup(questions: any) {
    let group: any = {};
    questions.values.forEach(question => {
      group[question.key] = new FormControl(question.value || '', Validators.required)
    });
    return new FormGroup(group);
  }

  save(caytegoryId: any) {
    const score = this.sum(this.form.value)
    this.saveEvent.emit({ score: score, id: caytegoryId });
  }
  public sum(obj) {
    var sum = 0;
    for (var el in obj) {
      if (obj[el] !== "" && obj[el] !== "ne se prononce pas" && obj[el] !== "impossible") {
        sum += parseFloat(obj[el]);
      }
    }
    return sum;
  }

}
