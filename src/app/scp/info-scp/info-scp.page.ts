import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-info-scp',
  templateUrl: './info-scp.page.html',
  styleUrls: ['./info-scp.page.scss'],
})
export class InfoScpPage implements OnInit {
public nombre : string =''
public foto : string = ''
public numero : string =''
  constructor(private scpinforoute: ActivatedRoute) { }

  ngOnInit() {
    this.scpinforoute.queryParams.subscribe(info =>{
      this.nombre = info['nombre'] || 'sin nombre',
      this.foto = info['foto'] || 'sin foto',
      this.numero =info['numero'] || 'sin numero';
    })
  }

}
