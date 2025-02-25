import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards-label',
  imports: [],
  templateUrl: './cards-label.component.html',
  styleUrl: './cards-label.component.css'
})
export class CardsLabelComponent implements OnInit{
  ngOnInit(): void {
  }
  @Input()
  gameLabel:string ="";

}
