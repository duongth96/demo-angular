import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { CreateComponent } from './create/create.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [
  {path:'new-order',component:CreateComponent},
  {path:'list-order',component:CreateComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExOrderRoutingModule { }
