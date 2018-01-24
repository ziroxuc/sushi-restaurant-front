

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

//router
import { APP_ROUTING } from './app.router';


//services

import { ProductosService } from './services/productos.service'
import { InformacionWebService } from './services/informacion-web.service';
import { CarritoCompraService } from './services/carrito-compra.service';


import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { CarroComprasComponent } from './home/carro-compras/carro-compras.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CarroComprasComponent,
    
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    HttpModule
  ],
  providers: [
    ProductosService,
    InformacionWebService,
    CarritoCompraService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
