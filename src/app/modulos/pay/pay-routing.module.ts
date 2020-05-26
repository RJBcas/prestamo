import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PayCreditComponent } from './pay-credit/pay-credit.component';


const routes: Routes = [
  {
    path: '', component: PayCreditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PayRoutingModule { }
