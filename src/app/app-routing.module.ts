import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultComponent } from './person/pages/consult/consult.component';
import { CreateComponent } from './person/pages/create/create.component';
const routes: Routes = [
  {
    path: 'home',
    component: ConsultComponent,
  },
  {
    path: 'create',
    component: CreateComponent,
  },
  {
    path:'**', redirectTo:"/home"}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
