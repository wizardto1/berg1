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

const appRoutes: Routes = [
  { path: '', redirectTo : '/home', pathMatch:'full' },{path:'home', component: HomeComponent },{path:'survey1',component:Survey1Component, pathMatch:'full'},{path:'survey2',component:Survey2Component},{path:'survey3',component:Survey3Component},{path:'survey4',component:Survey4Component},{path:'results',component:ResultsComponent}
];

@NgModule({
  imports:      [ BrowserModule, FormsModule,  RouterModule.forRoot(appRoutes) ],
  declarations: [ AppComponent,  HomeComponent, Survey1Component, Survey2Component, Survey3Component, ResultsComponent, Survey4Component, BodyComponent ],
  bootstrap:    [ AppComponent ],
  providers: [DataService]
})
export class AppModule { }
export class AppRoutingModule { }
