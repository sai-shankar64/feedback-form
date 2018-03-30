import { Component, OnInit, Input } from '@angular/core';
import { Section } from '../../models/section';
import { Question } from '../../models/question';

@Component({
  selector: 'app-designsection',
  templateUrl: './designsection.component.html',
  styleUrls: ['./designsection.component.scss']
})
export class DesignsectionComponent implements OnInit {
  @Input() section: Section;
  constructor() {
    this.section = new Section();
  }

  ngOnInit() {
    this.section.name = "New Section";
    this.section.questions = [];
  }
  question() {
    this.section.questions.push(new Question());
  }
  onKey(event: any) {
    this.section.name = event.target.value;
  }
}
