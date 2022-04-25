import { Component, Input, OnInit } from '@angular/core';
import { Player } from 'src/app/model/player.model';

@Component({
  selector: 'hand',
  templateUrl: './hand.component.html',
  styleUrls: ['./hand.component.scss'],
})
export class HandComponent implements OnInit {

  @Input()
  public player: Player;

  constructor() { }

  ngOnInit() {}

}
