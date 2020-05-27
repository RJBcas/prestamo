import { Component, OnInit } from '@angular/core';
import { ComunesService } from '../../services/comunes.service';
import { Router } from '@angular/router';
import { HistoryService } from '../../services/history.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  logueado: boolean;
  userPaid: boolean;
  isAdmin: boolean;
  constructor( private comun: ComunesService,
    private router: Router,
    private historial: HistoryService,
    ) {
    this.comun.isLoggin.subscribe( res => {
      this.logueado = res;
       if(res){
         this.comun.isUser.subscribe(rest =>{
           console.log(rest);
           this.isAdmin = rest.admin;
           if(rest.credits.length > 0){
              if(rest.credits[rest.credits.length -1].status && !rest.credits[rest.credits.length -1].paid) {
                this.userPaid = true;
              }
           }else{
             this.userPaid = false;
           }
         })
       }
    })
  }

  ngOnInit(): void {
  }
  verHistorial(){
    if( this.isAdmin) {
      this.historial.historialAdmin().subscribe( res => {
        this.comun.setHistorialAdmin(res)
      })
    }
    this.router.navigate(['/history'])

  }
}
