import { Http } from '@angular/http';
import { Injectable } from '@angular/core';


@Injectable()
export class InformacionWebService {

  cargada:boolean = false;
  infoWeb:any;

  constructor(public http:Http) {

    this.http.get('assets/data/informacion-web.json')
      .subscribe(data => {
        this.cargada = true;
        this.infoWeb = data.json();
      });


   }

}
