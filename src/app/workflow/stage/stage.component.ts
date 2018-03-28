import { Component, OnInit, Input } from '@angular/core';
import { Stage } from '../../models/stage';

@Component({
  selector: 'app-stage',
  templateUrl: './stage.component.html',
  styleUrls: ['./stage.component.scss']
})
export class StageComponent implements OnInit {
  @Input() stage:Stage;
  constructor() {
    this.stage=new Stage();
   }
  ngOnInit() {

  }

}
