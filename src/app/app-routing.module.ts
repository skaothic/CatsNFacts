import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FactsComponent } from './facts/facts.component';
import { ListComponent } from './list/list.component';


const routes: Routes = [
  {path:'list',component:ListComponent},
{path:'facts',component:FactsComponent},
{path:'**',component:ListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
