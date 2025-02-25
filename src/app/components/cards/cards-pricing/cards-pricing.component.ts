import { Component, Input, OnInit } from '@angular/core';
import { CardsLabelComponent } from '../cards-label/cards-label.component';

@Component({
  selector: 'app-cards-pricing',
  imports: [CardsLabelComponent],
  templateUrl: './cards-pricing.component.html',
  styleUrl: './cards-pricing.component.css'
})
export class CardsPricingComponent implements OnInit{
  @Input()
  gameType:string="Digital PS4";
  @Input()
  gamePrice:string="R$ 399.99"
  ngOnInit(): void {
  }

}
