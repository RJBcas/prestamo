import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { ComunesService } from '../../../services/comunes.service';




export interface PeriodicElement {
  expiresIn: string;
  status: boolean;
  paid: boolean;
  mount: number;
}





@Component({
  selector: 'app-history-credit',
  templateUrl: './history-credit.component.html',
  styleUrls: ['./history-credit.component.css']
})
export class HistoryCreditComponent implements OnInit {

  users: any;
  mon: any;
  constructor( private comun: ComunesService) {

    this.comun.isUser.subscribe( res => {
      this.users = res;
    })
   }

  // tslint:disable-next-line: member-ordering
  displayedColumns: string[] = [ 'expiresIn', 'status', 'paid', 'mount', 'Pagar'];
  dataSource = new MatTableDataSource();



  ngOnInit(): void {
    this.dataSource.data = this.users.credits;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
