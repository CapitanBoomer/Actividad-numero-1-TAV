import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
modooscuro: boolean = true;
  constructor() { const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
this.modooscuro = prefersDark.matches;}

  ngOnInit() {this.estado();
  }
estado(){
//const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
this.modooscuro =!this.modooscuro;
document.body.classList.toggle('dark')
}
}
