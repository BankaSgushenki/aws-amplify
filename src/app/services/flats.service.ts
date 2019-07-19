import { Injectable } from '@angular/core';
import { FLATS } from './mock-flats';

@Injectable({
  providedIn: 'root'
})
export class FlatsService {
  constructor() { }

  getFlats() {
    return FLATS;
  }
}
