import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
// import {
//   AddLoader,
//   RemoveLoader,
// } from "../../../store/actions/loaders.actions";
// import { signUp } from "../../../store/actions/sign-up.actions";

// import { Store, select } from "@ngrx/store";
import { MatTableDataSource } from "@angular/material/table";
import { Credit } from "src/app/models/Credict.models";
import { Router } from "@angular/router";
import { ComunesService } from '../../../services/comunes.service';

export interface PeriodicElement {
  name: string;
  ci: number;
  expiresIn: string;
  status: boolean;
  paid: boolean;
  mount: number;
}

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
  selector: "app-history",
  templateUrl: "./history.component.html",
  styleUrls: ["./history.component.css"],
})
export class HistoryComponent implements OnInit {
  tablet: Credit[];
  isAdmin: boolean;
  usersAdmin: any;
  constructor(
    private comun: ComunesService
  ) {
    this.comun.isUser.subscribe( res => {
    this.isAdmin = res.admin;
    });

    if(this.isAdmin){
      this.comun.isHistorialAdmin.subscribe( res => {
this.usersAdmin;
      })
    }
    this.tablet = this.usersAdmin;

  }


  ELEMENT_DATA = this.tablet;

  // tslint:disable-next-line: member-ordering
  displayedColumns: string[] = [
    "ci",
    "name",
  ];

  dataSource = new MatTableDataSource();

  ngOnInit(): void {
    this.dataSource.data = this.tablet;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


}
