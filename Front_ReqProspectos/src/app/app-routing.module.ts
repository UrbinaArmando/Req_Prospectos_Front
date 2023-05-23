import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProspectsFormComponent } from './modules/prospects-form/prospects-form.component';
import { ProspectsListComponent } from './modules/prospects-list/prospects-list.component';
import { ProspectsEvaluationComponent } from './modules/prospects-evaluation/prospects-evaluation.component';


const routes: Routes = [
  { path: 'form', component: ProspectsFormComponent },
  { path: 'list', component: ProspectsListComponent },
  { path: 'evaluation', component: ProspectsEvaluationComponent },
  { path: '', redirectTo: 'list', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
