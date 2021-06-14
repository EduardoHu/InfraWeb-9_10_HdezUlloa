import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { DataApiService } from '../../services/data-api.service';
import {  MesasInterface } from '../../models/mesas';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { ListMesasComponent } from '../list-mesas/list-mesas.component';
import { AuthService } from '../../services/auth.service'
@Component({
  selector: 'app-modalmesas',
  templateUrl: './modalmesas.component.html',
  styleUrls: ['./modalmesas.component.css'],
  providers: [AuthService]
})
export class ModalmesasComponent implements OnInit {
  public hijo: ListMesasComponent;
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
    if (mesaForm.value.Id == null) {
      // New 
      mesaForm.value.correo_registro = this.userCorreo;
      this.dataApi.addMesas(mesaForm.value);
    } else {
      // Update
      this.dataApi.updateMesas(mesaForm.value);
    }
    mesaForm.resetForm();
    this.btnClose.nativeElement.click();
  }
}
