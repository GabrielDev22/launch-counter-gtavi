import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Character } from '../model/character';
import { LocalStorageFrontService } from '../service/localStorageFront.service';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-gta-character',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './gta-character.component.html',
  styleUrl: './gta-character.component.scss'
})
export class GtaCharacterComponent implements OnInit {

  characters: Character[] = [];
  selected!: Character;

  readonly traitIndices = [0, 1, 2, 3, 4, 5];

  constructor(
    private titleService: Title,
    private metaService : Meta,
    private _dataService: LocalStorageFrontService
  ) {}

  ngOnInit(): void {
    this.titleService.setTitle('Personajes GTA VI — Lucia y Jason | GTA VI Countdown');
    this.metaService.updateTag({ name: 'description', content: 'Conoce a Lucia y Jason, los dos protagonistas jugables de GTA VI. La primera mujer protagonista de la saga y su compañero criminal en el estado de Leonida.' });
    this.metaService.updateTag({ name: 'keywords', content: 'personajes GTA VI, Lucia GTA VI, Jason GTA VI, protagonistas GTA 6, primera protagonista femenina GTA' });
    this.metaService.updateTag({ property: 'og:title', content: 'Personajes GTA VI — Lucia y Jason' });
    this.metaService.updateTag({ property: 'og:description', content: 'Lucia y Jason: los dos protagonistas jugables del juego más esperado de la historia.' });

    this.characters = this._dataService.getCharacters();
    this.selected   = this.characters[0];
  }

  select(char: Character): void {
    this.selected = char;
  }
}
