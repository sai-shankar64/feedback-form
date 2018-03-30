import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
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
import { MaterialdesignModule } from './modules/materialdesign/materialdesign.module';
import { DesignchoiceComponent } from './form-design/designchoice/designchoice.component';
import { DesignquestionComponent } from './form-design/designquestion/designquestion.component';
import { DesignsectionComponent } from './form-design/designsection/designsection.component';




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
    DesignchoiceComponent,
    DesignquestionComponent,
    DesignsectionComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    AngularmaterialModule,
    MaterialdesignModule
  ],
  entryComponents: [FormDesignComponent],
  providers: [FormService],
  bootstrap: [AppComponent],
  schemas:[
    CUSTOM_ELEMENTS_SCHEMA,
  ]
})
export class AppModule { }
