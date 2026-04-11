import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { LocalStorageFrontService } from '../service/localStorageFront.service';
import { MapInstructionSections, ZoneUbication } from '../model/maps';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-gta-world-map',
  templateUrl: './gta-world-map.component.html',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  styleUrls: ['./gta-world-map.component.scss']
})
export class GtaWorldMapComponent implements OnInit {

  getMaps : MapInstructionSections[] = [];

  activeFilter : string = ZoneUbication.VICE_CITY;

  filters = [
    {label : "Vice City", value : ZoneUbication.VICE_CITY},
    {label : "Cayos de Leónidas", value : ZoneUbication.LEONIDAS_KEYS},
    {label : "Grassirevers", value : ZoneUbication.GRASSIREVERS},
    {label : "Puerto Gellhorn", value : ZoneUbication.PORT_GELLHORN},
    {label : "Ambrosía", value : ZoneUbication.RAG_WEED},
    {label : "Monte Kalaga", value : ZoneUbication.MOUNT_KALAGA},
  ];

  constructor(
    private _localStorageFront : LocalStorageFrontService,
    private titleService : Title,
    private metaService : Meta,
  ) { }

  ngOnInit() {
    this.getMaps = this._localStorageFront.getMaps();
  }

  get gridMapInstructionSections(): MapInstructionSections[] {
    return this.getMaps.filter(n => n.filter === this.activeFilter);
  }

  setFilter(filter: string): void {
    this.activeFilter = filter;
  }

}
