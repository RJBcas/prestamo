import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { FondosModels } from '../../models/Fondos.models';

@Component({
  selector: 'app-fondos',
  templateUrl: './fondos.component.html',
  styleUrls: ['./fondos.component.css'],
})
export class FondosComponent implements OnInit, FondosModels {
  fondos: number;

  constructor() {
    this.fondos = environment.fondosBanco;
  }

  ngOnInit(): void {}
}
