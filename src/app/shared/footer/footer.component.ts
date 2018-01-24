import { Component, OnInit } from '@angular/core';
import { InformacionWebService } from '../../services/informacion-web.service';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styles: []
})
export class FooterComponent implements OnInit {

  anio: any;

  constructor(public _infoWeb: InformacionWebService) { 

    this.anio = new Date().getFullYear(); 
  }

  ngOnInit() {
  }

}
