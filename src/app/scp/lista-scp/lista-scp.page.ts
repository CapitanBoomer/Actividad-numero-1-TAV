import { Component, OnInit, QueryList } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-lista-scp',
  templateUrl: './lista-scp.page.html',
  styleUrls: ['./lista-scp.page.scss'],
})
export class ListaScpPage implements OnInit {
  public id: string ='';
  public scp: Array<any> = [
    {
      id:1,
      numero:'Scp-096',
      nombre :'Timido',
      foto:'https://i.pinimg.com/564x/6d/e3/05/6de305638031f47b4c7abfc7a4509f7a.jpg',
      clasificacion:'Euclid'

    },
    {

      id:2,
      numero:'SCP-049',
      nombre :'Medico de la peste',
      foto:'http://scp-wiki.wikidot.com/local--files/scp-049/SCP-049',
      clasificacion:'Euclid'
    },
     {
      id:3,
      numero:'Scp-096',
      nombre :'El viejo',
      foto:'https://cdnb.artstation.com/p/assets/covers/images/015/231/075/large/klay-abele-e.jpg?1547578461',
      clasificacion:'Keter'

    },

    ]
  constructor(private scprouter: Router) { }

  ngOnInit() {
  }

  public navegarQuery() {
    this.scprouter.navigate
      (
        ['/info-scp'],
        {
          queryParams:
          {
            id:1,
            numero:'Scp-096',
            nombre :'Timido',
            foto:'https://i.pinimg.com/564x/6d/e3/05/6de305638031f47b4c7abfc7a4509f7a.jpg',
            clasificacion:'Euclid'

          },
        }
      )
  }
}
