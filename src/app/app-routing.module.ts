import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/forms/login/login.component';
import { MainComponent } from './components/pages/main/main.component';
import { ClientRegisterComponent } from './components/forms/client-register/client-register.component';
import { MesasComponent } from './components/pages/mesas/mesas.component';
import { ListMesasComponent } from './components/list-mesas/list-mesas.component';
import { ContactoComponent } from './components/pages/contacto/contacto.component';
const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'iniciar-sesion',
    component: LoginComponent
  },
  {
    path: 'registro',
    component: ClientRegisterComponent
  },
  {
    path: 'contacto',
    component: ContactoComponent
  },
  {
    path: 'admin/mesas',
    component: ListMesasComponent
  },
  {
    path: 'mesas',
    component: MesasComponent
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
