

import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import { CarritoCompraService } from './../services/carrito-compra.service';

declare var $:any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

hola:any = "nombreeee";

  productos: any = [];
  url = '';
  cargada = false;

  constructor(private http: Http,public ccService:CarritoCompraService) {

    this.url = 'assets/data/productos.json'
    this.http.get(this.url)
      .subscribe(data => {
        this.cargada = true;
        this.productos = data.json().productos;
      });

   }

  ngOnInit() {


  }

}
