import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { LocalStorageFrontService } from '../service/localStorageFront.service';
import { MapInstructionSections, ZoneUbication } from '../model/maps';
import { Meta, Title } from '@angular/platform-browser';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-gta-world-map',
  templateUrl: './gta-world-map.component.html',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, TranslatePipe],
  styleUrls: ['./gta-world-map.component.scss']
})
export class GtaWorldMapComponent implements OnInit {

  maps: MapInstructionSections[] = [];
  activeFilter: string = ZoneUbication.VICE_CITY;

  filters = [
    ZoneUbication.VICE_CITY,
    ZoneUbication.LEONIDAS_KEYS,
    ZoneUbication.GRASSIREVERS,
    ZoneUbication.PORT_GELLHORN,
    ZoneUbication.RAG_WEED,
    ZoneUbication.MOUNT_KALAGA,
  ];

  constructor(
    private _localStorageFront: LocalStorageFrontService,
    private titleService: Title,
    private metaService : Meta,
  ) { }

  ngOnInit() {
    this.titleService.setTitle(
      'Mapa de GTA VI (Leonida) — Vice City, tamaño y ubicaciones | GTA VI Countdown'
    );  
    this.metaService.updateTag({
      name: 'description',
      content: 'Explora el mapa de GTA VI en el estado de Leonida: Vice City, tamaño del mapa, ubicaciones confirmadas, zonas y todos los detalles del mundo abierto de GTA 6.'
    });
    this.metaService.updateTag({
      name: 'keywords',
      content: 'mapa GTA VI, GTA 6 map, mapa Leonida, Vice City GTA VI, tamaño mapa GTA 6, ubicaciones GTA VI, mundo abierto GTA 6'
    });
    this.maps = this._localStorageFront.getMaps();
  }

  get visibleMap(): MapInstructionSections | undefined {
    return this.maps.find(m => m.filter === this.activeFilter);
  }

  setFilter(filter: string): void {
    this.activeFilter = filter;
  }

}
