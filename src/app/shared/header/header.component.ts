import { Component, OnInit } from '@angular/core';
import { InformacionWebService } from '../../services/informacion-web.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent implements OnInit {

  constructor( public _infoWeb: InformacionWebService) { }

  ngOnInit() {
  }

}
