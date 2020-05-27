import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs'
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ComunesService {

  constructor() { }


  private loggin = new BehaviorSubject<boolean>(false);
  isLoggin = this.loggin.asObservable();
  // tslint:disable-next-line: member-ordering

  private fondos = new BehaviorSubject<number>(environment.fondosBanco);
  isFondos = this.fondos.asObservable();

  private historialAdmin = new BehaviorSubject<any>({});
  isHistorialAdmin = this.historialAdmin.asObservable();

  private user = new BehaviorSubject<any>({});
  isUser = this.user.asObservable();

  setUser(user: any){
    this.user.next(user)
  }

    setLoggin(data: boolean) {
    this.loggin.next(data);
  }

  setFondos(data: number) {
    this.fondos.next(data);
  }
  setHistorialAdmin (data) {
    this.historialAdmin.next(data)
  }
}
