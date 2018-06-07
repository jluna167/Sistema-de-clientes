import 'rxjs/add/operator/map';

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Response } from '@angular/http';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  data: any = {};

  /*url: 'http://apiprueba.somee.com/api/prueba';*/
  url: 'http://localhost:55310/api/prueba';
  constructor(private router: Router,
              private http: Http) { }

  ngOnInit() {
  }

  getData() {

    return this.http.get(this.url).
      map((res: Response) => res.json());
  }

  abrirGestionClientes() {
    /*this.router.navigate(['/clientes']);*/
    this.getData().subscribe(data => {
      console.log(data);
      this.data = data;
    });


  }
  abrirGestionVentas() {
    this.router.navigate(['/ventas']);
  }
  abrirGestionStock() {
    this.router.navigate(['/stock']);
  }
  abrirConfiguracion() {
    this.router.navigate(['/configuracion']);
  }
}
