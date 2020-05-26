import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';


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

  constructor() {

   }

  // tslint:disable-next-line: member-ordering
  displayedColumns: string[] = [ 'expiresIn', 'status', 'paid', 'mount'];
  dataSource = new MatTableDataSource();

  ngOnInit(): void {
    this.dataSource.data = [
      { expiresIn: '2/12/2023', status: false, paid: false, mount: 0 },
      { expiresIn: '2/12/2024', status: false, paid: false, mount: 0},
      { expiresIn: '2/12/2025', status: false, paid: false, mount: 0},
      { expiresIn: '2/12/2013', status: false, paid: false, mount: 0},
      { expiresIn: '2/12/2003', status: false, paid: false, mount: 0},
      { expiresIn: '2/12/2043', status: false, paid: false, mount: 0},
      { expiresIn: '2/12/2073', status: true, paid: true, mount: 100000},
      {expiresIn: '2/12/2010', status: true,  paid: false, mount: 10000},
      {expiresIn: '2/12/2244', status: true,  paid: true, mount: 20000},
      { expiresIn: '2/12/2060', status: false, paid: false, mount: 0},
    ];
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
