
import { Component } from '@angular/core';
import { CarritoCompraService } from '../../services/carrito-compra.service';
import { IProductos } from './../../services/productos.service';

@Component({
  selector: 'app-carro-compras',
  templateUrl: './carro-compras.component.html',
  styles: []
})
export class CarroComprasComponent {

  constructor(public ccService:CarritoCompraService) { }


  productsAdded:IProductos[] = this.ccService.cargarLocalStorage(); 


}
