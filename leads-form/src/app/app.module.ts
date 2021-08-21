import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeadsFormComponent } from './leads-form/leads-form.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TutorialFormComponent } from './tutorial-form/tutorial-form.component';
import { RightsReadingComponent } from './rights-reading/rights-reading.component';
import { SocialStatusComponent } from './social-status/social-status.component';
import { FinalPageComponent } from './final-page/final-page.component';
import { HttpModule } from '@angular/http';
@NgModule({
  declarations: [
    AppComponent,
    LeadsFormComponent,
    HomeComponent,
    TutorialFormComponent,
    RightsReadingComponent,
    SocialStatusComponent,
    FinalPageComponent,
    
  ],
  imports: [
    RouterModule.forRoot([
      {path : 'leads-form', component : LeadsFormComponent},
       {path : 'home',component:HomeComponent},
    ]),
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
