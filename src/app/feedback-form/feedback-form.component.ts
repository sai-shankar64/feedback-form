import { Component, OnInit } from '@angular/core';
import { FormService } from '../services/form.service';
import { Form } from '../models/form';

@Component({
  selector: 'app-feedback-form',
  templateUrl: './feedback-form.component.html',
  styleUrls: ['./feedback-form.component.scss']
})

export class FeedbackFormComponent implements OnInit {
  form: Form;
  constructor(private _form: FormService) {
    this.form = new Form();
  }
  ngOnInit() {
    this._form.getForm().subscribe(res => {
      this.form = Object.assign(this.form, res);
    }
    );
  }
}
