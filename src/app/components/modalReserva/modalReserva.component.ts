import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { DataApiService } from '../../services/data-api.service';
import {  MesasInterface } from '../../models/mesas';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { MesasComponent } from '../pages/mesas/mesas.component';
import { AuthService } from '../../services/auth.service'
@Component({
  selector: 'app-modalReserva',
  templateUrl: './modalReserva.component.html',
  styleUrls: ['./modalReserva.component.css'],
  providers: [AuthService]
})
export class ModalReservaComponent implements OnInit {
  public hijo: MesasComponent;
  constructor(public dataApi: DataApiService, public authService: AuthService) { }
  public userCorreo: string = null;
  @ViewChild('btnClose') btnClose: ElementRef;
  @Input() userUid: string;
  @Input() correo_registro: string;
  ngOnInit(): void {
    this.getCurrentUser();
  }
  getCurrentUser() {
    this.authService.isAuth().subscribe(auth => {
      if (auth) {
        this.userCorreo = auth.email;

      }
    })
  }
  onSaveMesa(mesaForm: NgForm): void {
      this.dataApi.updateMesas(mesaForm.value);
    mesaForm.resetForm();
    this.btnClose.nativeElement.click();
  }
  onPreUpdateMesa(mesa: MesasInterface) {
    this.dataApi.selectedMesa = Object.assign({}, mesa);
  }
}
