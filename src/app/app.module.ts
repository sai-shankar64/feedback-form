import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//services
import { FormService } from './services/form.service';

//classes

import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material/material.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { DemoComponent } from './demo/demo.component';
import { DemoChoiceComponent } from './demo/demochoice.component';
import { FeedbackFormComponent } from './feedback-form/feedback-form.component';
import { SectionComponent } from './feedback-form/section/section.component';
import { QuestionComponent } from './feedback-form/question/question.component';
import { ChoiceComponent } from './feedback-form/choice/choice.component';
import { AuthComponent } from './auth/auth.component';
import { WorkflowComponent } from './workflow/workflow.component';
import { StageComponent } from './workflow/stage/stage.component';
import { FormDesignComponent } from './form-design/form-design.component';
import { HomeComponent } from './home/home.component';
import { AngularmaterialModule } from './angularmaterial/angularmaterial.module';



@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    DemoComponent,
    DemoChoiceComponent,
    FeedbackFormComponent,
    SectionComponent,
    QuestionComponent,
    ChoiceComponent,
    AuthComponent,
    WorkflowComponent,
    StageComponent,
    FormDesignComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    AngularmaterialModule
  ],
  providers: [FormService],
  bootstrap: [AppComponent]
})
export class AppModule { }
