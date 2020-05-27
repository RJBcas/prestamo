
import { Injectable } from '@angular/core';

import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

import { Observable } from 'rxjs';

import { ComunesService } from './comunes.service';



@Injectable({

  providedIn: 'root'

})

export class GuardRoutService implements CanActivate {

 isLoggi: boolean;

  constructor (public comun: ComunesService, public router: Router) {
    this.comun.isLoggin.subscribe( res => {
      this.isLoggi =res;
    })

  }

  canActivate(

    next: ActivatedRouteSnapshot,

    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {



      if (!this.isLoggi) {

        this.router.navigate(['login']);

        return false;

      }

      return true;

  }

}
