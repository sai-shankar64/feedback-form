import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import {Form} from '../models/form';

@Injectable()
export class FormService {

  //private _form = new BehaviorSubject<Form>(new Form);
  //form:Form;
  formUrl = 'assets/samples/form.json';

  constructor(private http: HttpClient) { }

  getForm() {
    return this.http.get(this.formUrl);
  }
  
}
