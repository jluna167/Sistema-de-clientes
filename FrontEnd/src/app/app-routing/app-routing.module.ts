import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppLoginComponent} from '../app-login/app-login.component';
import {HomeComponent} from '../home/home.component';
import {ConfiguracionComponent} from '../configuracion/configuracion.component';
import {GestionClientesComponent} from '../gestion-clientes/gestion-clientes.component';
import {GestionStockComponent} from '../gestion-stock/gestion-stock.component';
import {GestionVentasComponent} from '../gestion-ventas/gestion-ventas.component';

const appRoutes: Routes = [
  { path: 'login', component: AppLoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  { path: 'clientes', component: GestionClientesComponent },
  { path: 'stock', component: GestionStockComponent },
  { path: 'ventas', component: GestionVentasComponent },
  { path: 'configuracion', component: ConfiguracionComponent },
  /*{ path: '**', component: PageNotFoundComponent }*/
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
