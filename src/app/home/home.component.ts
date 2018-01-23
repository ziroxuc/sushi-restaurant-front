import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';


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

  constructor(private http: Http) {

  
    this.url = 'assets/data/productos.json'
    this.http.get(this.url)
      .subscribe(data => {
        this.cargada = true;
        this.productos = data.json().productos;

        console.log(this.productos);

      });

   }

  ngOnInit() {


  }

}
