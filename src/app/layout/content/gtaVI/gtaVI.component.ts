import { isPlatformBrowser } from '@angular/common';
import { Component, inject, OnDestroy, OnInit, PLATFORM_ID } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { TranslateDirective, TranslatePipe } from '@ngx-translate/core';
import { AngularSvgIconModule } from 'angular-svg-icon';

@Component({
  selector: 'app-gtaVI',
  templateUrl: './gtaVI.component.html',
  standalone: true,
  imports: [AngularSvgIconModule, TranslatePipe, TranslateDirective],
  styleUrls: ['./gtaVI.component.scss']
})
export class GtaVIComponent implements OnInit, OnDestroy {

  launch     : Date = new Date('2026-11-19T00:00:00');
  trailerDate: Date = new Date('2023-12-05T00:00:00');
  totalMs!   : number;

  cdDays!  : string;
  cdHours! : string;
  cdMins!  : string;
  cdSecs!  : string;
  progFill!: string;
  progPct! : string;

  intervalId : any;
  platformId = inject(PLATFORM_ID);

  constructor(
    private titleService: Title,
    private metaService : Meta,
  ) { }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }

  ngOnInit() {
    this.titleService.setTitle('GTA VI Countdown | Cuenta Regresiva Oficial y Fecha de Lanzamiento');
    this.metaService.updateTag({ name: 'description', content: '¿Cuánto falta para GTA 6? Sigue nuestra cuenta regresiva en tiempo real. Entérate de la fecha de lanzamiento, trailers y noticias confirmadas de Rockstar Games.' });
    this.metaService.updateTag({ name: 'keywords', content: 'GTA VI, GTA 6, Countdown, Rockstar Games, Fecha de lanzamiento GTA VI, contador' });
    this.metaService.updateTag({ property: 'og:title', content: 'GTA VI Countdown | Cuenta Regresiva Oficial y Fecha de Lanzamiento' });
    this.metaService.updateTag({ property: 'og:description', content: '¿Cuánto falta para GTA 6? Sigue nuestra cuenta regresiva en tiempo real. Entérate de la fecha de lanzamiento, trailers y noticias confirmadas de Rockstar Games.' });
    this.metaService.updateTag({ name: 'twitter:title', content: 'GTA VI Countdown | Cuenta Regresiva Oficial' });
    this.metaService.updateTag({ name: 'twitter:description', content: '¿Cuánto falta para GTA 6? Cuenta regresiva en tiempo real con noticias y fecha de lanzamiento oficial.' });

    this.totalMs = this.launch.getTime() - this.trailerDate.getTime();
    if (isPlatformBrowser(this.platformId)) {
      this.intervalId = setInterval(() => this.update(), 1000);
    }
  }

  update() {
    const now  = new Date();
    const diff = this.launch.getTime() - now.getTime();

    if (diff <= 0) {
      this.cdDays  = '0';
      this.cdHours = '0';
      this.cdMins  = '0';
      this.cdSecs  = '0';
      this.progFill = '100%';
      this.progPct  = '100';
      return;
    }

    const days  = Math.floor(diff / 86400000);
    const hours = Math.floor((diff % 86400000) / 3600000);
    const mins  = Math.floor((diff % 3600000) / 60000);
    const secs  = Math.floor((diff % 60000) / 1000);

    this.cdDays  = String(days).padStart(2, '0');
    this.cdHours = String(hours).padStart(2, '0');
    this.cdMins  = String(mins).padStart(2, '0');
    this.cdSecs  = String(secs).padStart(2, '0');

    const elapsed = now.getTime() - this.trailerDate.getTime();
    const pct     = Math.min(100, Math.max(0, (elapsed / this.totalMs) * 100));
    this.progFill = pct.toFixed(1) + '%';
    this.progPct  = pct.toFixed(1);
  }

}
