import { Component, OnInit } from '@angular/core';
import { DataApiService } from 'src/app/services/data-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mesas',
  templateUrl: './mesas.component.html',
  styleUrls: ['./mesas.component.css']
})
export class MesasComponent implements OnInit {

  constructor(private dataApi: DataApiService, private router: Router) { }
  public mesas = [];
  public mesa = '';
  calidad = '';
  personasMax = '';
  reservada = '';
  codigo = '';
  reservadaPor = '';
  ngOnInit() {
    this.dataApi.getAllMesas().subscribe(mesas => {
      this.mesas = mesas;
      if (this.mesas.length == 0) {
        window.alert("No se encuentran mesas disponibles, intentelo mas tarde")
        //this.router.navigate(['']);

      }
    });

  }


}
