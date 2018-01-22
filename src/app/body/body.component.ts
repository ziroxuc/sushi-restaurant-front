import { Component, OnInit } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styles: []
})
export class BodyComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    $("#owl-latest-product").owlCarousel({
      autoPlay: false, //Set AutoPlay to 3 seconds
      items : 4,
      stopOnHover : true,
      navigation : true, // Show next and prev buttons
      pagination : false,
      navigationText : ["<span class='fa fa-chevron-left'></span>","<span class='fa fa-chevron-right'></span>"]
    });
    $("#owl-featured-product").owlCarousel({
      autoPlay: false, //Set AutoPlay to 3 seconds
      items : 2,
      stopOnHover : true,
      navigation : true, // Show next and prev buttons
      pagination : false,
      navigationText : ["<span class='fa fa-chevron-left'></span>","<span class='fa fa-chevron-right'></span>"]
    });


  }
}
