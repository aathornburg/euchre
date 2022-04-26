import { Component, Input, OnInit } from '@angular/core';
import { Card } from 'src/app/model/card.model';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {

  @Input()
  private card: Card;

  constructor() { }

  ngOnInit() {}

}
