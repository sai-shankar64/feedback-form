import { Component, OnInit } from '@angular/core';
import { Workflow } from '../models/workflow';

@Component({
  selector: 'app-workflow',
  templateUrl: './workflow.component.html',
  styleUrls: ['./workflow.component.scss']
})
export class WorkflowComponent implements OnInit {
  workflow:Workflow;
  constructor() { 
    this.workflow=new Workflow();
  }
  ngOnInit() {
  }

}
