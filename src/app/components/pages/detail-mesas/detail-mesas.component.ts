import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../../../services/data-api.service';
import { MesasInterface } from '../../../models/mesas';
import { ActivatedRoute, Params } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';

@Component({
  selector: 'app-detail-mesas',
  templateUrl: './detail-mesas.component.html',
  styleUrls: ['./detail-mesas.component.css'],
  providers: [AuthService]
})
export class DetailMesasComponent implements OnInit {
  constructor(public dataApi: DataApiService, public route: ActivatedRoute, public authService: AuthService, private http: HttpClient, private router: Router) { }
  public mesa: MesasInterface = {};
  public href: string = "";
  public userCorreo: string = null;
  ngOnInit() {
    this.href = window.location.href;
    this.getCurrentUser();
    const idMesa = this.route.snapshot.params['idMesa'];
    this.getDetalles(idMesa)
  }
  getDetalles(idMesa: string): void {
    this.dataApi.getMesa(idMesa).subscribe(mesa => {
      this.mesa = mesa;
    });
  }
  getCurrentUser() {
    this.authService.isAuth().subscribe(auth => {
      if (auth) {
        this.userCorreo = auth.email;
      }
    })
  }
  httpPost() {
      window.alert("Ingresa sesión para poder realizar está acción");
  }

}
