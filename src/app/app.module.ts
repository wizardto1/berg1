import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { Survey1Component } from './survey1/survey1.component';
import { Survey2Component } from './survey2/survey2.component';
import { Survey3Component } from './survey3/survey3.component';
import { ResultsComponent } from './results/results.component';
import { Survey4Component } from './survey4/survey4.component';
import { DataService } from './data.service';
import { BodyComponent } from './body/body.component';
import { TimerComponent } from './timer/timer.component';
import { HeaderComponent } from './header/header.component';
import { Survey5Component } from './survey5/survey5.component';
import { Survey6Component } from './survey6/survey6.component';
import { Survey7Component } from './survey7/survey7.component';
import { Survey8Component } from './survey8/survey8.component';
import { Survey9Component } from './survey9/survey9.component';
import { Survey10Component } from './survey10/survey10.component';
import { Survey11Component } from './survey11/survey11.component';
import { Survey12Component } from './survey12/survey12.component';
import { Survey13Component } from './survey13/survey13.component';
import { Survey14Component } from './survey14/survey14.component';
import { Warning1Component } from './warning1/warning1.component';
import { ScoresService } from './scores.service';

const appRoutes: Routes = [
  { path: '', redirectTo : '/home', pathMatch:'full' },{path:'home', component: HomeComponent },{path:'survey1',component:Survey1Component, pathMatch:'full'},{path:'survey2',component:Survey2Component},{path:'survey3',component:Survey3Component},{path:'survey4',component:Survey4Component},{path:'survey5',component:Survey5Component},{path:'survey6',component:Survey6Component},{path:'survey7',component:Survey7Component},{path:'survey8',component:Survey8Component},{path:'survey9',component:Survey9Component},{path:'survey10',component:Survey10Component},{path:'survey11',component:Survey11Component},{path:'survey12',component:Survey12Component},{path:'survey13',component:Survey13Component},{path:'survey14',component:Survey14Component},{path:'warning1',component:Warning1Component},{path:'results',component:ResultsComponent}
];

@NgModule({
  imports:      [ BrowserModule, FormsModule,  RouterModule.forRoot(appRoutes) ],
  declarations: [ AppComponent,  HomeComponent, Survey1Component, Survey2Component, Survey3Component, ResultsComponent, Survey4Component, BodyComponent, TimerComponent, HeaderComponent, Survey5Component, Survey6Component, Survey7Component, Survey8Component, Survey9Component, Survey10Component, Survey11Component, Survey12Component, Survey13Component, Survey14Component, Warning1Component ],
  bootstrap:    [ AppComponent ],
  providers: [DataService, ScoresService]
})
export class AppModule { }
export class AppRoutingModule { }
