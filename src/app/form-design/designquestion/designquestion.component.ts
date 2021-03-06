import { Component, OnInit, Input } from '@angular/core';
import { Question } from '../../models/question';
import { Choice } from '../../models/choice';

@Component({
  selector: 'app-designquestion',
  templateUrl: './designquestion.component.html',
  styleUrls: ['./designquestion.component.scss']
})
export class DesignquestionComponent implements OnInit {
  @Input() question: Question;
  constructor() {
    this.question = new Question();
  }

  ngOnInit() {
    this.question.name = "New Question";
    this.question.choices = [];
  }
  choice() {
    this.question.choices.push(new Choice());
  }
  onKey(event: any) {
    this.question.name = event.target.value;
  }
}
