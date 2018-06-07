import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-app-login',
  templateUrl: './app-login.component.html',
  styleUrls: ['./app-login.component.css']
})
export class AppLoginComponent implements OnInit {

  usuario = '';
  password = '';

  constructor(private router: Router) { }

  ngOnInit() {
  }

  validarDatos() {
    if (this.usuario === 'mariano.hetze' && this.password === 'mariano.hetze') {
      this.router.navigate(['/home']);
    }
  }
}
