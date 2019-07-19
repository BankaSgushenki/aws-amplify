import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-flat',
  templateUrl: './flat.component.html',
  styleUrls: ['./flat.component.scss']
})
export class FlatComponent implements OnInit {
  @Input() flat: any;

  constructor() { }

  ngOnInit() {
  }

}
