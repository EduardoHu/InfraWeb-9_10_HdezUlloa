import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/forms/login/login.component';
import { MainComponent } from './components/pages/main/main.component';
import { ClientRegisterComponent } from './components/forms/client-register/client-register.component';
import { ForgotPasswordComponent } from './components/forms/forgot-password/forgot-password.component';
import { MesasComponent } from './components/pages/mesas/mesas.component';
import { DetailMesasComponent } from './components/pages/detail-mesas/detail-mesas.component';
import { ListMesasComponent } from './components/list-mesas/list-mesas.component';
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
    path: 'admin/mesas',
    component: ListMesasComponent
  },
  {
    path: 'mesas',
    component: MesasComponent
  },
  {
    path: 'recuperar-contrasena',
    component: ForgotPasswordComponent
  },
  {
    path: 'mesa/:idMesa',
    component: DetailMesasComponent
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
