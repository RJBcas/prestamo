import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { FondosModels } from '../../models/Fondos.models';
import { ComunesService } from '../../services/comunes.service';

@Component({
  selector: 'app-fondos',
  templateUrl: './fondos.component.html',
  styleUrls: ['./fondos.component.css'],
})
export class FondosComponent implements OnInit, FondosModels {
  fondos: number;

  constructor(private comun: ComunesService) {
    this.comun.isFondos.subscribe( res => {
      this.fondos = res
    })

  }

  ngOnInit(): void {}
}
