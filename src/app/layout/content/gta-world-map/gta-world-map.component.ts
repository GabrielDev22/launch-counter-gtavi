import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gta-world-map',
  templateUrl: './gta-world-map.component.html',
  standalone: true,
  imports: [CommonModule],
  styleUrls: ['./gta-world-map.component.scss']
})
export class GtaWorldMapComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
