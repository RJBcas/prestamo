import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'createAccount', loadChildren: () => import('./../create-account/create-account.module').then(r => r.CreateAccountModule)
  },
  {
    path: 'login', loadChildren: () => import('../login/login.module').then( r => r.LoginModule)
  },
  {
    path: 'history', loadChildren: () => import('../history/history.module').then( r => r.HistorialModule)
  },
  {
    path: 'pay', loadChildren: () => import('../pay/pay.module').then( r => r.PayModule)
  },
  {
    path: 'requestC', loadChildren: () => import('../request-credit/request-credit.module').then( r => r.RequestCreditModule)
  },
  { path: '', redirectTo: 'createAccount', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BaseRutingRoutingModule { }
