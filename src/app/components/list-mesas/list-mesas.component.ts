import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../../services/data-api.service';
import { MesasInterface } from '../../models/mesas';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-list-mesas',
  templateUrl: './list-mesas.component.html',
  styleUrls: ['./list-mesas.component.css'],
  providers: [AuthService]
})
export class ListMesasComponent implements OnInit {
  constructor(public dataApi: DataApiService, public authService: AuthService) { }
  filterPost = '';

  public userCorreo: string = null;
  public mesa: MesasInterface = {}
  public mesas: MesasInterface[];
  ngOnInit(): void {
    this.getListMesas();
    this.getCurrentUser();

  }
  getCurrentUser() {
    this.authService.isAuth().subscribe(auth => {
      if (auth) {
        this.userCorreo = auth.email;
      }
    })
  }
  getListMesas() {
    this.dataApi.getAllMesas().subscribe(mesas => {
      this.mesas = mesas;
    });
  }
  onDeleteMesa(idMesa: string) {
    const confirmacion = confirm("¿Estas seguro de eliminar la mesa?");
    if (confirmacion) {
      this.dataApi.deleteMesa(idMesa);
    }
  }
  onPreUpdateMesa(mesa: MesasInterface) {
    this.dataApi.selectedMesa = Object.assign({}, mesa);
  }
}
