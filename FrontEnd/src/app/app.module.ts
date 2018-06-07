import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppLoginComponent } from './app-login/app-login.component';
import { HomeComponent } from './home/home.component';
import { GestionClientesComponent } from './gestion-clientes/gestion-clientes.component';
import { GestionStockComponent } from './gestion-stock/gestion-stock.component';
import { GestionVentasComponent } from './gestion-ventas/gestion-ventas.component';
import { ConfiguracionComponent } from './configuracion/configuracion.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { FiltroClienteComponent } from './shared/filtro-cliente/filtro-cliente.component';

@NgModule({
  declarations: [
    AppComponent,
    AppLoginComponent,
    HomeComponent,
    GestionClientesComponent,
    GestionStockComponent,
    GestionVentasComponent,
    ConfiguracionComponent,
    FiltroClienteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [HomeComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
