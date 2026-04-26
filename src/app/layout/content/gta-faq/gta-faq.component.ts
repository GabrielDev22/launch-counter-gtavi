import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-gta-faq',
  standalone: true,
  imports: [TranslatePipe, CommonModule, AngularSvgIconModule, ReactiveFormsModule ],
  templateUrl: './gta-faq.component.html',
  styleUrl: './gta-faq.component.scss'
})
export class GtaFaqComponent implements OnInit {

  activeSection: string = '';
  openItemId: string | null = null;
  searchControl = new FormControl('');
  globalFaqContent : any[] = [];
  filteredFaqs: any[] = [];

  sectionRealeseDate = [
    {id: "1", label: "FAQ.INDEX.REALESE_DATE.ONE", value: "FAQ.INDEX.REALESE_DATE_RESPONSE.ONE"},
    {id: "2", label: "FAQ.INDEX.REALESE_DATE.TWO", value: "FAQ.INDEX.REALESE_DATE_RESPONSE.TWO"},
    {id: "3", label: "FAQ.INDEX.REALESE_DATE.THREE", value: "FAQ.INDEX.REALESE_DATE_RESPONSE.THREE"},
    {id: "4", label: "FAQ.INDEX.REALESE_DATE.FOUR", value: "FAQ.INDEX.REALESE_DATE_RESPONSE.FOUR"},
    {id: "5", label: "FAQ.INDEX.REALESE_DATE.FIVE", value: "FAQ.INDEX.REALESE_DATE_RESPONSE.FIVE"},
    {id: "6", label: "FAQ.INDEX.REALESE_DATE.SIX", value: "FAQ.INDEX.REALESE_DATE_RESPONSE.SIX"},
    {id: "7", label: "FAQ.INDEX.REALESE_DATE.SEVEN", value: "FAQ.INDEX.REALESE_DATE_RESPONSE.SEVEN"},
    {id: "8", label: "FAQ.INDEX.REALESE_DATE.EIGTH", value: "FAQ.INDEX.REALESE_DATE_RESPONSE.EIGTH"},
    {id: "9", label: "FAQ.INDEX.REALESE_DATE.NINE", value: "FAQ.INDEX.REALESE_DATE_RESPONSE.NINE"},
    {id: "10", label: "FAQ.INDEX.REALESE_DATE.TEN", value: "FAQ.INDEX.REALESE_DATE_RESPONSE.TEN"},
    {id: "11", label: "FAQ.INDEX.REALESE_DATE.ONCE", value: "FAQ.INDEX.REALESE_DATE_RESPONSE.ONCE"},
    {id: "12", label: "FAQ.INDEX.REALESE_DATE.TWELVE", value: "FAQ.INDEX.REALESE_DATE_RESPONSE.TWELVEN"},
    {id: "13", label: "FAQ.INDEX.REALESE_DATE.THIRTEEN", value: "FAQ.INDEX.REALESE_DATE_RESPONSE.THIRTEEN"},
  ];

  sectionPlatform = [
    {id: "14", label: "FAQ.INDEX.PLATFORM.ONE", value: "FAQ.INDEX.PLATFORM_RESPONSE.ONE"},
    {id: "15", label: "FAQ.INDEX.PLATFORM.TWO", value: "FAQ.INDEX.PLATFORM_RESPONSE.TWO"},
    {id: "16", label: "FAQ.INDEX.PLATFORM.THREE", value: "FAQ.INDEX.PLATFORM_RESPONSE.THREE"},
    {id: "17", label: "FAQ.INDEX.PLATFORM.FOUR", value: "FAQ.INDEX.PLATFORM_RESPONSE.FOUR"},
    {id: "18", label: "FAQ.INDEX.PLATFORM.FIVE", value: "FAQ.INDEX.PLATFORM_RESPONSE.FIVE"},
    {id: "19", label: "FAQ.INDEX.PLATFORM.SIX", value: "FAQ.INDEX.PLATFORM_RESPONSE.SIX"},
    {id: "20", label: "FAQ.INDEX.PLATFORM.SEVEN", value: "FAQ.INDEX.PLATFORM_RESPONSE.SEVEN"},
    {id: "21", label: "FAQ.INDEX.PLATFORM.EIGTH", value: "FAQ.INDEX.PLATFORM_RESPONSE.EIGHT"},
    {id: "22", label: "FAQ.INDEX.PLATFORM.NINE", value: "FAQ.INDEX.PLATFORM_RESPONSE.NINE"},
    {id: "23", label: "FAQ.INDEX.PLATFORM.TEN", value: "FAQ.INDEX.PLATFORM_RESPONSE.TEN"},
    {id: "24", label: "FAQ.INDEX.PLATFORM.ONCE", value: "FAQ.INDEX.PLATFORM_RESPONSE.ONCE"},
    {id: "25", label: "FAQ.INDEX.PLATFORM.TWELVE", value: "FAQ.INDEX.PLATFORM_RESPONSE.TWELVE"},
    {id: "26", label: "FAQ.INDEX.PLATFORM.THIRTEEN", value: "FAQ.INDEX.PLATFORM_RESPONSE.THIRTEEN"},
    {id: "27", label: "FAQ.INDEX.PLATFORM.FOURTEEN", value: "FAQ.INDEX.PLATFORM_RESPONSE.FOURTEEN"},
  ];

  sectionMapAndWorld = [
    {id: "27", label: "FAQ.INDEX.MAP_AND_WORLD.ONE", value: "FAQ.INDEX.MAP_AND_WORLD_RESPONSE.ONE"},
    {id: "28", label: "FAQ.INDEX.MAP_AND_WORLD.TWO", value: "FAQ.INDEX.MAP_AND_WORLD_RESPONSE.TWO"},
    {id: "29", label: "FAQ.INDEX.MAP_AND_WORLD.THREE", value: "FAQ.INDEX.MAP_AND_WORLD_RESPONSE.THREE"},
    {id: "30", label: "FAQ.INDEX.MAP_AND_WORLD.FOUR", value: "FAQ.INDEX.MAP_AND_WORLD_RESPONSE.FOUR"},
    {id: "31", label: "FAQ.INDEX.MAP_AND_WORLD.FIVE", value: "FAQ.INDEX.MAP_AND_WORLD_RESPONSE.FIVE"},
    {id: "32", label: "FAQ.INDEX.MAP_AND_WORLD.SIX", value: "FAQ.INDEX.MAP_AND_WORLD_RESPONSE.SIX"},
    {id: "33", label: "FAQ.INDEX.MAP_AND_WORLD.SEVEN", value: "FAQ.INDEX.MAP_AND_WORLD_RESPONSE.SEVEN"},
    {id: "34", label: "FAQ.INDEX.MAP_AND_WORLD.EIGTH", value: "FAQ.INDEX.MAP_AND_WORLD_RESPONSE.EIGHT"},
    {id: "35", label: "FAQ.INDEX.MAP_AND_WORLD.NINE", value: "FAQ.INDEX.MAP_AND_WORLD_RESPONSE.NINE"},
    {id: "36", label: "FAQ.INDEX.MAP_AND_WORLD.TEN", value: "FAQ.INDEX.MAP_AND_WORLD_RESPONSE.TEN"},
    {id: "37", label: "FAQ.INDEX.MAP_AND_WORLD.ONCE", value: "FAQ.INDEX.MAP_AND_WORLD_RESPONSE.ONCE"},
    {id: "38", label: "FAQ.INDEX.MAP_AND_WORLD.TWELVE", value: "FAQ.INDEX.MAP_AND_WORLD_RESPONSE.TWELVE"},
    {id: "39", label: "FAQ.INDEX.MAP_AND_WORLD.THIRTEEN", value: "FAQ.INDEX.MAP_AND_WORLD_RESPONSE.THIRTEEN"},
    {id: "40", label: "FAQ.INDEX.MAP_AND_WORLD.FOURTEEN", value: "FAQ.INDEX.MAP_AND_WORLD_RESPONSE.FOURTEEN"},
    {id: "41", label: "FAQ.INDEX.MAP_AND_WORLD.FIFTEEN", value: "FAQ.INDEX.MAP_AND_WORLD_RESPONSE.FIFTEEN"},
  ];

  sectionCharacter = [
    {id: "42", label: "FAQ.INDEX.CHARACTER.ONE", value: "FAQ.INDEX.CHARACTER_RESPONSE.ONE"},
    {id: "43", label: "FAQ.INDEX.CHARACTER.TWO", value: "FAQ.INDEX.CHARACTER_RESPONSE.TWO"},
    {id: "44", label: "FAQ.INDEX.CHARACTER.THREE", value: "FAQ.INDEX.CHARACTER_RESPONSE.THREE"},
    {id: "45", label: "FAQ.INDEX.CHARACTER.FOUR", value: "FAQ.INDEX.CHARACTER_RESPONSE.FOUR"},
    {id: "46", label: "FAQ.INDEX.CHARACTER.FIVE", value: "FAQ.INDEX.CHARACTER_RESPONSE.FIVE"},
    {id: "47", label: "FAQ.INDEX.CHARACTER.SIX", value: "FAQ.INDEX.CHARACTER_RESPONSE.SIX"},
    {id: "48", label: "FAQ.INDEX.CHARACTER.SEVEN", value: "FAQ.INDEX.CHARACTER_RESPONSE.SEVEN"},
    {id: "49", label: "FAQ.INDEX.CHARACTER.EIGTH", value: "FAQ.INDEX.CHARACTER_RESPONSE.EIGTH"},
    {id: "50", label: "FAQ.INDEX.CHARACTER.NINE", value: "FAQ.INDEX.CHARACTER_RESPONSE.NINE"},
    {id: "51", label: "FAQ.INDEX.CHARACTER.TEN", value: "FAQ.INDEX.CHARACTER_RESPONSE.TEN"},
    {id: "52", label: "FAQ.INDEX.CHARACTER.ONCE", value: "FAQ.INDEX.CHARACTER_RESPONSE.ONCE"},
    {id: "53", label: "FAQ.INDEX.CHARACTER.TWELVE", value: "FAQ.INDEX.CHARACTER_RESPONSE.TWELVE"},
    {id: "54", label: "FAQ.INDEX.CHARACTER.THIRTEEN", value: "FAQ.INDEX.CHARACTER_RESPONSE.THIRTEEN"}
  ];

  sectionGameplay = [
    {id: "55", label: "FAQ.INDEX.GAMEPLAY.ONE", value: "FAQ.INDEX.GAMEPLAY_RESPONSE.ONE"},
    {id: "56", label: "FAQ.INDEX.GAMEPLAY.TWO", value: "FAQ.INDEX.GAMEPLAY_RESPONSE.TWO"},
    {id: "57", label: "FAQ.INDEX.GAMEPLAY.THREE", value: "FAQ.INDEX.GAMEPLAY_RESPONSE.THREE"},
    {id: "58", label: "FAQ.INDEX.GAMEPLAY.FOUR", value: "FAQ.INDEX.GAMEPLAY_RESPONSE.FOUR"},
    {id: "59", label: "FAQ.INDEX.GAMEPLAY.FIVE", value: "FAQ.INDEX.GAMEPLAY_RESPONSE.FIVE"},
    {id: "60", label: "FAQ.INDEX.GAMEPLAY.SIX", value: "FAQ.INDEX.GAMEPLAY_RESPONSE.SIX"},
    {id: "61", label: "FAQ.INDEX.GAMEPLAY.SEVEN", value: "FAQ.INDEX.GAMEPLAY_RESPONSE.SEVEN"},
    {id: "62", label: "FAQ.INDEX.GAMEPLAY.EIGTH", value: "FAQ.INDEX.GAMEPLAY_RESPONSE.EIGTH"},
    {id: "63", label: "FAQ.INDEX.GAMEPLAY.NINE", value: "FAQ.INDEX.GAMEPLAY_RESPONSE.NINE"},
    {id: "64", label: "FAQ.INDEX.GAMEPLAY.TEN", value: "FAQ.INDEX.GAMEPLAY_RESPONSE.TEN"},
    {id: "65", label: "FAQ.INDEX.GAMEPLAY.ONCE", value: "FAQ.INDEX.GAMEPLAY_RESPONSE.ONCE"},
    {id: "66", label: "FAQ.INDEX.GAMEPLAY.TWELVE", value: "FAQ.INDEX.GAMEPLAY_RESPONSE.TWELVE"},
    {id: "67", label: "FAQ.INDEX.GAMEPLAY.THIRTEEN", value: "FAQ.INDEX.GAMEPLAY_RESPONSE.THIRTEEN"},
    {id: "68", label: "FAQ.INDEX.GAMEPLAY.FOURTEEN", value: "FAQ.INDEX.GAMEPLAY_RESPONSE.FOURTEEN"},
    {id: "69", label: "FAQ.INDEX.GAMEPLAY.FIFTEEN", value: "FAQ.INDEX.GAMEPLAY_RESPONSE.FIFTEEN"},
    {id: "70", label: "FAQ.INDEX.GAMEPLAY.SEXTEEN", value: "FAQ.INDEX.GAMEPLAY_RESPONSE.SEXTEEN"},
    {id: "71", label: "FAQ.INDEX.GAMEPLAY.SEVENTEEN", value: "FAQ.INDEX.GAMEPLAY_RESPONSE.SEVENTEEN"},
    {id: "72", label: "FAQ.INDEX.GAMEPLAY.EIGHTEEN", value: "FAQ.INDEX.GAMEPLAY_RESPONSE.EIGHTEEN"},
    {id: "73", label: "FAQ.INDEX.GAMEPLAY.NINETEEN", value: "FAQ.INDEX.GAMEPLAY_RESPONSE.NINETEEN"},
  ];

  sectionTecnicalAndPc = [
    {id: "74", label: "FAQ.INDEX.TECNICAL_AND_PC.ONE", value: "FAQ.INDEX.TECNICAL_AND_PC_RESPONSE.ONE"},
    {id: "75", label: "FAQ.INDEX.TECNICAL_AND_PC.TWO", value: "FAQ.INDEX.TECNICAL_AND_PC_RESPONSE.TWO"},
    {id: "76", label: "FAQ.INDEX.TECNICAL_AND_PC.THREE", value: "FAQ.INDEX.TECNICAL_AND_PC_RESPONSE.THREE"},
    {id: "77", label: "FAQ.INDEX.TECNICAL_AND_PC.FOUR", value: "FAQ.INDEX.TECNICAL_AND_PC_RESPONSE.FOUR"},
    {id: "78", label: "FAQ.INDEX.TECNICAL_AND_PC.FIVE", value: "FAQ.INDEX.TECNICAL_AND_PC_RESPONSE.FIVE"},
    {id: "79", label: "FAQ.INDEX.TECNICAL_AND_PC.SIX", value: "FAQ.INDEX.TECNICAL_AND_PC_RESPONSE.SIX"},
    {id: "80", label: "FAQ.INDEX.TECNICAL_AND_PC.SEVEN", value: "FAQ.INDEX.TECNICAL_AND_PC_RESPONSE.SEVEN"},
    {id: "81", label: "FAQ.INDEX.TECNICAL_AND_PC.EIGTH", value: "FAQ.INDEX.TECNICAL_AND_PC_RESPONSE.EIGHT"},
    {id: "82", label: "FAQ.INDEX.TECNICAL_AND_PC.NINE", value: "FAQ.INDEX.TECNICAL_AND_PC_RESPONSE.NINE"},
    {id: "83", label: "FAQ.INDEX.TECNICAL_AND_PC.TEN", value: "FAQ.INDEX.TECNICAL_AND_PC_RESPONSE.TEN"},
    {id: "84", label: "FAQ.INDEX.TECNICAL_AND_PC.ONCE", value: "FAQ.INDEX.TECNICAL_AND_PC_RESPONSE.ONCE"},
    {id: "85", label: "FAQ.INDEX.TECNICAL_AND_PC.TWELVE", value: "FAQ.INDEX.TECNICAL_AND_PC_RESPONSE.TWELVE"},  ]

  sectionHistory = [
    {id: "87", label: "FAQ.INDEX.HISTORY.ONE", value: "FAQ.INDEX.HISTORY_RESPONSE.ONE"},
    {id: "88", label: "FAQ.INDEX.HISTORY.TWO", value: "FAQ.INDEX.HISTORY_RESPONSE.TWO"},
    {id: "89", label: "FAQ.INDEX.HISTORY.THREE", value: "FAQ.INDEX.HISTORY_RESPONSE.THREE"},
    {id: "90", label: "FAQ.INDEX.HISTORY.FOUR", value: "FAQ.INDEX.HISTORY_RESPONSE.FOUR"},
    {id: "91", label: "FAQ.INDEX.HISTORY.FIVE", value: "FAQ.INDEX.HISTORY_RESPONSE.FIVE"},
    {id: "92", label: "FAQ.INDEX.HISTORY.SIX", value: "FAQ.INDEX.HISTORY_RESPONSE.SIX"},
    {id: "93", label: "FAQ.INDEX.HISTORY.SEVEN", value: "FAQ.INDEX.HISTORY_RESPONSE.SEVEN"},
    {id: "94", label: "FAQ.INDEX.HISTORY.EIGTH", value: "FAQ.INDEX.HISTORY_RESPONSE.EIGHT"},
    {id: "95", label: "FAQ.INDEX.HISTORY.NINE", value: "FAQ.INDEX.HISTORY_RESPONSE.NINE"},
    {id: "96", label: "FAQ.INDEX.HISTORY.TEN", value: "FAQ.INDEX.HISTORY_RESPONSE.TEN"},
    {id: "97", label: "FAQ.INDEX.HISTORY.ONCE", value: "FAQ.INDEX.HISTORY_RESPONSE.ONCE"},
    {id: "98", label: "FAQ.INDEX.HISTORY.TWELVE", value: "FAQ.INDEX.HISTORY_RESPONSE.TWELVE"},
    {id: "99", label: "FAQ.INDEX.HISTORY.THIRTEEN", value: "FAQ.INDEX.HISTORY_RESPONSE.THIRTEEN"},
    {id: "100", label: "FAQ.INDEX.HISTORY.FOURTEEN", value: "FAQ.INDEX.HISTORY_RESPONSE.FOURTEEN"},
  ]

  constructor(
    private _translationService : TranslateService 
  ){
    this.globalFaqContent.push(
      ...this.sectionRealeseDate,
      ...this.sectionPlatform,
      ...this.sectionMapAndWorld,
      ...this.sectionCharacter,
      ...this.sectionGameplay,
      ...this.sectionTecnicalAndPc,
      ...this.sectionHistory
    );

    this.filteredFaqs.push(
      ...this.sectionRealeseDate,
      ...this.sectionPlatform,
      ...this.sectionMapAndWorld,
      ...this.sectionCharacter,
      ...this.sectionGameplay,
      ...this.sectionTecnicalAndPc,
      ...this.sectionHistory
    );
  }
  
  get isSearching(): boolean {
    return !!this.searchControl.value?.trim();
  }

  ngOnInit(){
    this.searchControl.valueChanges.subscribe(value => {
      if (value?.trim()) {
        this.filterFaqs(value);
      } else {
        this.filteredFaqs = [...this.globalFaqContent];
      }
    });
  }

  toggleItem(id: string): void {
    this.openItemId = this.openItemId === id ? null : id;
  }

  scrollToSection(sectionId: string) {
    this.activeSection = sectionId;
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      this.toggleItem(sectionId);
    }
  }

  filterFaqs(value: string) {
    const filterValue = value.toLowerCase();

    this.filteredFaqs = this.globalFaqContent.filter(faq =>{
      const faqLabel = this.normalizeText(this._translationService.instant(faq.label));
      const faqValue = this.normalizeText(this._translationService.instant(faq.value));
      return faqLabel.toLowerCase().includes(filterValue) || faqValue.toLowerCase().includes(filterValue)
    });
  }

  normalizeText(text: string): string {
    return text
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[¿?¡!.,]/g, '');
  }

}
