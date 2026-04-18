import { Injectable } from '@angular/core';
import { NewsItem } from '../model/noticies-gta';
import { Character } from '../model/character';
import { MapInstructionSections, ZoneUbication } from '../model/maps';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageFrontService {

  getCharacters(): Character[] {
    return [
      { id: 1, name: 'Lucia', theme: 'lucia' },
      { id: 2, name: 'Jason', theme: 'jason' }
    ];
  }

  getNews(): NewsItem[] {
    return [
      { id: 1, category: 'TRAILERS',   featured: true,  link: 'https://www.youtube.com/watch?v=QdBZY2fkU-0' },
      { id: 2, category: 'CHARACTERS', featured: false },
      { id: 3, category: 'LAUNCH',     featured: false },
      { id: 4, category: 'WORLD',      featured: false },
      { id: 5, category: 'PLATFORMS',  featured: false },
      { id: 6, category: 'TRAILERS',   featured: false }
    ];
  }

  getMaps(): MapInstructionSections[] {
    return [
      { id: 1, img: 'assets/gta-world/vice-city-gta-6.webp',              filter: ZoneUbication.VICE_CITY     },
      { id: 2, img: 'assets/gta-world/leonida-keys-gta-6.webp',           filter: ZoneUbication.LEONIDAS_KEYS },
      { id: 3, img: 'assets/gta-world/grassrivers-grand-theft-auto-6.webp', filter: ZoneUbication.GRASSIREVERS  },
      { id: 4, img: 'assets/gta-world/port-gellhorn-gta-6.webp',          filter: ZoneUbication.PORT_GELLHORN },
      { id: 5, img: 'assets/gta-world/ambrosia-grand-theft-auto-6.webp',  filter: ZoneUbication.RAG_WEED      },
      { id: 6, img: 'assets/gta-world/mount-kalaga-gta-6.webp',           filter: ZoneUbication.MOUNT_KALAGA  }
    ];
  }

}
