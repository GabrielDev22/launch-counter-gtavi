import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ROUTES_MAP } from '../utils/model/RoutesMap';
import { TranslateModule, TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  standalone: true,
  imports: [CommonModule, RouterLink, TranslateModule],
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isLangOpen : boolean = false;
  currentLang : string = 'es';

  readonly languages = [
    { code: 'es', label: 'Español' },
    { code: 'en', label: 'English' }
  ];

  constructor(
    private translate: TranslateService,
    private elRef: ElementRef
  ) { }

  ngOnInit() {
    this.currentLang = this.translate.currentLang || 'es';
    this.translate.onLangChange.subscribe(e => this.currentLang = e.lang);
  }

  get ROUTES_MAP() { return ROUTES_MAP; }

  toggleLangMenu(): void {
    this.isLangOpen = !this.isLangOpen;
  }

  selectLang(code: string): void {
    this.translate.use(code);
    this.isLangOpen = false;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    if (!this.elRef.nativeElement.contains(event.target)) {
      this.isLangOpen = false;
    }
  }

}
