import { Component, OnInit } from '@angular/core';
import { NewsItem } from '../model/noticies-gta';
import { LocalStorageFrontService } from '../service/localStorageFront.service';

@Component({
  selector: 'app-noticies-gtavi',
  templateUrl: './noticies-gtavi.component.html',
  standalone: true,
  imports: [],
  styleUrls: ['./noticies-gtavi.component.scss']
})
export class NoticiesGtaviComponent implements OnInit {

  activeFilter = 'Todo';

  filters = ['Todo', 'Trailers', 'Personajes', 'Lanzamiento', 'Mundo', 'Plataformas'];

  newsItems: NewsItem[] = [];

  constructor(
    private _localStorageFront : LocalStorageFrontService
  ){}

  ngOnInit(){
    this.newsItems = this._localStorageFront.getNews();
  }

  get featuredItem(): NewsItem {
    return this.newsItems[0];
  }

  get gridItems(): NewsItem[] {
    const nonFeatured = this.newsItems.filter(n => !n.featured);
    if (this.activeFilter === 'Todo') return nonFeatured;
    return nonFeatured.filter(n => n.category === this.activeFilter);
  }

  setFilter(filter: string): void {
    this.activeFilter = filter;
  }
}
