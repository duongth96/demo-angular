import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'dashboard',loadChildren:() => import('./modules/darshboard/darshboard.module').then(c=>c.DarshboardModule)},
  {path:'store',loadChildren:() => import('./modules/store/store.module').then(c=>c.StoreModule)},
  {path:'ex-order',loadChildren:() => import('./modules/ex-order/ex-order.module').then(c=>c.ExOrderModule)},
	{ path: '**', redirectTo: 'dashboard' },
  // { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
