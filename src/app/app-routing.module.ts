import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeedbackFormComponent } from './feedback-form/feedback-form.component';
import { HomeComponent } from './home/home.component';
import { WorkflowComponent } from './workflow/workflow.component';
import { FormDesignComponent } from './form-design/form-design.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'get',component:FeedbackFormComponent},
  {path:'set',component:WorkflowComponent},
  {path:'newform',component:FormDesignComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
