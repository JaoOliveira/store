import { Component, Input, OnInit } from '@angular/core';
import { CardsLabelComponent } from './cards-label/cards-label.component';
import { CardsPricingComponent } from './cards-pricing/cards-pricing.component';

@Component({
  selector: 'app-cards',
  imports: [CardsLabelComponent, CardsPricingComponent],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent implements OnInit{
  @Input()
  gameCover:string="";
  @Input()
  gameType:string="XPTO | PS4";
  @Input()
  gamePrice:string="R$ 399.99"
  @Input()
  gameLabel:string ="";

  ngOnInit(): void {
  }


}
