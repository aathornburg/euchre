import { Component, OnInit } from '@angular/core';
import { DealService } from '../service/deal.service';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;

  constructor(
    private dealService: DealService
  ) { }

  ngOnInit():void  {}

}
