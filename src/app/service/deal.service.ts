import { Injectable } from '@angular/core';
import { Hand } from '../model/hand.model';

@Injectable({
  providedIn: 'root'
})
export class DealService {

  constructor() { }

  getHand(): Hand {
    return null;
  }
}
