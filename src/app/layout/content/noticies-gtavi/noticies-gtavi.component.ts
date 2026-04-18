import { Component, OnInit } from '@angular/core';
import { NewsItem } from '../model/noticies-gta';
import { LocalStorageFrontService } from '../service/localStorageFront.service';
import { Meta, Title } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-noticies-gtavi',
  templateUrl: './noticies-gtavi.component.html',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  styleUrls: ['./noticies-gtavi.component.scss']
})
export class NoticiesGtaviComponent implements OnInit {

  activeFilter = 'ALL';

  filters = ['ALL', 'TRAILERS', 'CHARACTERS', 'LAUNCH', 'WORLD', 'PLATFORMS'];

  newsItems: NewsItem[] = [];

  constructor(
    private titleService: Title,
    private metaService : Meta,
    private _localStorageFront: LocalStorageFrontService
  ) {}

  ngOnInit() {
    this.titleService.setTitle('Últimas Noticias de GTA VI - Countdown');
    this.metaService.updateTag({ name: 'description', content: 'Descubre todas las novedades, trailers y filtraciones de GTA VI. Actualizado diariamente.' });
    this.metaService.updateTag({ name: 'keywords', content: 'noticias GTA VI, GTA 6 noticias, trailers GTA VI, Lucia GTA VI, Rockstar Games novedades, fecha lanzamiento GTA 6' });
    this.metaService.updateTag({ property: 'og:title', content: 'Noticias Explosivas de GTA VI' });
    this.metaService.updateTag({ property: 'og:description', content: 'Descubre todas las novedades, trailers y filtraciones de GTA VI. Actualizado diariamente.' });
    this.metaService.updateTag({ name: 'twitter:title', content: 'Últimas Noticias de GTA VI' });
    this.metaService.updateTag({ name: 'twitter:description', content: 'Trailers, filtraciones y todo lo confirmado sobre GTA VI. Actualizado diariamente.' });
    this.newsItems = this._localStorageFront.getNews();
  }

  get featuredItem(): NewsItem {
    return this.newsItems[0];
  }

  get gridItems(): NewsItem[] {
    const nonFeatured = this.newsItems.filter(n => !n.featured);
    if (this.activeFilter === 'ALL') return nonFeatured;
    return nonFeatured.filter(n => n.category === this.activeFilter);
  }

  get newsSectionKey(): string {
    return this.activeFilter === 'ALL'
      ? 'NEWS.SECTION_ALL'
      : 'NEWS.FILTERS.' + this.activeFilter;
  }

  setFilter(filter: string): void {
    this.activeFilter = filter;
  }
}
