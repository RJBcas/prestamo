import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {
  AddLoader,
  RemoveLoader,
} from '../../../store/actions/loaders.actions';
import { signUp } from '../../../store/actions/sign-up.actions';

import { Store, select } from '@ngrx/store';
import {MatTableDataSource} from '@angular/material/table';
import { Credit } from '../../../models/User.models';

export interface PeriodicElement {
  name: string;
  ci: number;
  expiresIn: string;
  status: boolean;
  paid: boolean;
  mount: number;
}

// const ELEMENT_DATA: PeriodicElement[] = [
//   {ci: 11, name: 'Hydrogen', expiresIn: '2/12/2023', status: false, paid: false, mount: 0 },
//   {ci: 22, name: 'Helium', expiresIn: '2/12/2024', status: false, paid: false, mount: 0},
//   {ci: 33, name: 'Lithium', expiresIn: '2/12/2025', status: false, paid: false, mount: 0},
//   {ci: 44, name: 'Beryllium', expiresIn: '2/12/2013', status: false, paid: false, mount: 0},
//   {ci: 55, name: 'Boron', expiresIn: '2/12/2003', status: false, paid: false, mount: 0},
//   {ci: 66, name: 'Carbon', expiresIn: '2/12/2043', status: false, paid: false, mount: 0},
//   {ci: 77, name: 'Nitrogen', expiresIn: '2/12/2073', status: true, paid: true, mount: 100000},
//   {ci: 88, name: 'Oxygen', expiresIn: '2/12/2010', status: true,  paid: false, mount: 10000},
//   {ci: 99, name: 'Fluorine', expiresIn: '2/12/2244', status: true,  paid: true, mount: 20000},
//   {ci: 100, name: 'Neon', expiresIn: '2/12/2060', status: false, paid: false, mount: 0},
// ];



export interface PeriodicElement {
  userId: string;
  name: string;
  ci: number;
  expiresIn: string;
  status: boolean;
  paid: boolean;
  mount: number;
}


@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css'],
})
export class HistoryComponent implements OnInit {

  tablet: PeriodicElement [];
  constructor(private store: Store<{ laoders: string[] }>) {
    this.loaders$ = store.pipe(select('laoders'));

this.tablet = [
  {userId:'12323',ci: 11, name: 'Hydrogen', expiresIn: '2/12/2023', status: false, paid: false, mount: 0},
  {userId:'1233',ci: 22, name: 'Helium', expiresIn: '2/12/2024', status: false, paid: false, mount: 0},
  {userId:'12133',ci: 33, name: 'Lithium', expiresIn: '2/12/2025', status: false, paid: false, mount: 0},
  {userId:'12333',ci: 44, name: 'Beryllium', expiresIn: '2/12/2013', status: false, paid: false, mount: 0},
  {userId:'12343',ci: 55, name: 'Boron', expiresIn: '2/12/2003', status: false, paid: false, mount: 0},
  {userId:'12331',ci: 66, name: 'Carbon', expiresIn: '2/12/2043', status: false, paid: false, mount: 0},
  {userId:'12335',ci: 77, name: 'Nitrogen', expiresIn: '2/12/2073', status: true, paid: true, mount: 100000},
  {userId:'12336',ci: 88, name: 'Oxygen', expiresIn: '2/12/2010', status: true,  paid: false, mount: 10000},
  {userId:'12633',ci: 99, name: 'Fluorine', expiresIn: '2/12/2244', status: true,  paid: true, mount: 20000},
  {userId:'12533',ci: 100, name: 'Neon', expiresIn: '2/12/2060', status: false, paid: false, mount: 0},
];

  }
  loaders$: Observable<string[]>;


    ELEMENT_DATA: PeriodicElement[] = this.tablet;

  // tslint:disable-next-line: member-ordering
  displayedColumns: string[] = ['ci', 'name', 'expiresIn', 'status', 'paid', 'mount', 'Pagar'];

  dataSource = new MatTableDataSource();

  ngOnInit(): void {
    this.dataSource.data = this.tablet;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }




  signUp() {
    alert('hi');
    this.store.dispatch(
      signUp({
        name: 'asdasdasd',
        ci: 'asdasdasd',
        email: 'string',
        password: 'string',
        admin: true
      })
    );
  }

  addLoader() {
    this.store.dispatch(AddLoader({ loader: 'yolo' }));
  }

  removeLoader() {
    this.store.dispatch(RemoveLoader({ loader: 'yolo' }));
  }
}
