import { Component, OnInit } from '@angular/core';
import { FlatsService } from '../../services/flats.service';

@Component({
  selector: 'app-flats',
  templateUrl: './flats.component.html',
  styleUrls: ['./flats.component.scss']
})

export class FlatsComponent implements OnInit {
  flats: any[];

  constructor(private flatsService: FlatsService) { }

  getFlats(): void {
    this.flats = this.flatsService.getFlats();
  }

  ngOnInit() {
    this.getFlats();
  }
}
