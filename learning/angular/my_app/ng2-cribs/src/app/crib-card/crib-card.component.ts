import { Component, OnInit, Input } from '@angular/core';
// import { Crib } from './../crib';	

@Component({
  selector: 'app-crib-card',
  templateUrl: './crib-card.component.html',
  styleUrls: ['./crib-card.component.css']
})
export class CribCardComponent implements OnInit {

  @Input('crib') crib: any;
  // @Input('crib') crib: Crib;

  constructor() { }

  ngOnInit(): void {
    let bedroom = this.crib.bedrooms;
  }

}