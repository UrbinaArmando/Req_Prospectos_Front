import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProspectsFormComponent } from './modules/prospects-form/prospects-form.component';
import { ProspectsListComponent } from './modules/prospects-list/prospects-list.component';
import { ProspectsEvaluationComponent } from './modules/prospects-evaluation/prospects-evaluation.component';

@NgModule({
  declarations: [
    AppComponent,
    ProspectsFormComponent,
    ProspectsListComponent,
    ProspectsEvaluationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
