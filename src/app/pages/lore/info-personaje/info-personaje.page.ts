import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-info-personaje',
  templateUrl: './info-personaje.page.html',
  styleUrls: ['./info-personaje.page.scss'],
})
export class InfoPersonajePage implements OnInit {
  public id: string = '';
  public nombre: string = '';
  public foto: string = '';
  public nacionalidad: string = '';
  public faccion: string = '';
  public info: string = '';
  public ciudad: string = '';

  constructor(private inforoute: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.inforoute.snapshot.paramMap.get('id')||'';
    this.nombre = this.inforoute.snapshot.paramMap.get('nombre') || 'sin nombre';
    this.foto = this.inforoute.snapshot.paramMap.get('foto')||'';
    this.nacionalidad = this.inforoute.snapshot.paramMap.get('nacionalidad')||'';
    this.faccion = this.inforoute.snapshot.paramMap.get('faccion')||'';
    this.info = this.inforoute.snapshot.paramMap.get('info')||'';
    this.ciudad = this.inforoute.snapshot.paramMap.get('ciudad')||'';
  }
}

