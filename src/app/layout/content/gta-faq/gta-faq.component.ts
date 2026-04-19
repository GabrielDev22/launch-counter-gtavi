import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { AngularSvgIconModule } from 'angular-svg-icon';

@Component({
  selector: 'app-gta-faq',
  standalone: true,
  imports: [TranslatePipe, CommonModule, AngularSvgIconModule],
  templateUrl: './gta-faq.component.html',
  styleUrl: './gta-faq.component.scss'
})
export class GtaFaqComponent implements OnInit {

  activeSection : string = '';

  sectionRealeseDate = [
    {id: "1", label: "FAQ.INDEX.REALESE_DATE.ONE"},
    {id: "2", label: "FAQ.INDEX.REALESE_DATE.TWO"},
    {id: "3", label: "FAQ.INDEX.REALESE_DATE.THREE"},
    {id: "4", label: "FAQ.INDEX.REALESE_DATE.FOUR"},
    {id: "5", label: "FAQ.INDEX.REALESE_DATE.FIVE"},
    {id: "6", label: "FAQ.INDEX.REALESE_DATE.SIX"},
    {id: "7", label: "FAQ.INDEX.REALESE_DATE.SEVEN"},
    {id: "8", label: "FAQ.INDEX.REALESE_DATE.EIGTH"},
    {id: "9", label: "FAQ.INDEX.REALESE_DATE.NINE"},
    {id: "10", label: "FAQ.INDEX.REALESE_DATE.TEN"},
    {id: "11", label: "FAQ.INDEX.REALESE_DATE.ONCE"},
    {id: "12", label: "FAQ.INDEX.REALESE_DATE.TWELVE"},
    {id: "13", label: "FAQ.INDEX.REALESE_DATE.THIRTEEN"},
  ];

  sectionPlatform = [
    {id: "14", label: "FAQ.INDEX.PLATFORM.ONE"},
    {id: "15", label: "FAQ.INDEX.PLATFORM.TWO"},
    {id: "16", label: "FAQ.INDEX.PLATFORM.THREE"},
    {id: "17", label: "FAQ.INDEX.PLATFORM.FOUR"},
    {id: "18", label: "FAQ.INDEX.PLATFORM.FIVE"},
    {id: "19", label: "FAQ.INDEX.PLATFORM.SIX"},
    {id: "20", label: "FAQ.INDEX.PLATFORM.SEVEN"},
    {id: "21", label: "FAQ.INDEX.PLATFORM.EIGTH"},
    {id: "22", label: "FAQ.INDEX.PLATFORM.NINE"},
    {id: "23", label: "FAQ.INDEX.PLATFORM.TEN"},
    {id: "24", label: "FAQ.INDEX.PLATFORM.ONCE"},
    {id: "25", label: "FAQ.INDEX.PLATFORM.TWELVE"},
    {id: "26", label: "FAQ.INDEX.PLATFORM.THIRTEEN"},
    {id: "27", label: "FAQ.INDEX.PLATFORM.FOURTEEN"},
  ];

  sectionMapAndWorld = [
    {id: "27", label: "FAQ.INDEX.MAP_AND_WORLD.ONE"},
    {id: "28", label: "FAQ.INDEX.MAP_AND_WORLD.TWO"},
    {id: "29", label: "FAQ.INDEX.MAP_AND_WORLD.THREE"},
    {id: "30", label: "FAQ.INDEX.MAP_AND_WORLD.FOUR"},
    {id: "31", label: "FAQ.INDEX.MAP_AND_WORLD.FIVE"},
    {id: "32", label: "FAQ.INDEX.MAP_AND_WORLD.SIX"},
    {id: "33", label: "FAQ.INDEX.MAP_AND_WORLD.SEVEN"},
    {id: "34", label: "FAQ.INDEX.MAP_AND_WORLD.EIGTH"},
    {id: "35", label: "FAQ.INDEX.MAP_AND_WORLD.NINE"},
    {id: "36", label: "FAQ.INDEX.MAP_AND_WORLD.TEN"},
    {id: "37", label: "FAQ.INDEX.MAP_AND_WORLD.ONCE"},
    {id: "38", label: "FAQ.INDEX.MAP_AND_WORLD.TWELVE"},
    {id: "39", label: "FAQ.INDEX.MAP_AND_WORLD.THIRTEEN"},
    {id: "40", label: "FAQ.INDEX.MAP_AND_WORLD.FOURTEEN"},
    {id: "41", label: "FAQ.INDEX.MAP_AND_WORLD.FIFTEEN"},
  ];

  sectionCharacter = [
    {id: "42", label: "FAQ.INDEX.CHARACTER.ONE"},
    {id: "43", label: "FAQ.INDEX.CHARACTER.TWO"},
    {id: "44", label: "FAQ.INDEX.CHARACTER.THREE"},
    {id: "45", label: "FAQ.INDEX.CHARACTER.FOUR"},
    {id: "46", label: "FAQ.INDEX.CHARACTER.FIVE"},
    {id: "47", label: "FAQ.INDEX.CHARACTER.SIX"},
    {id: "48", label: "FAQ.INDEX.CHARACTER.SEVEN"},
    {id: "49", label: "FAQ.INDEX.CHARACTER.EIGTH"},
    {id: "50", label: "FAQ.INDEX.CHARACTER.NINE"},
    {id: "51", label: "FAQ.INDEX.CHARACTER.TEN"},
    {id: "52", label: "FAQ.INDEX.CHARACTER.ONCE"},
    {id: "53", label: "FAQ.INDEX.CHARACTER.TWELVE"},
    {id: "54", label: "FAQ.INDEX.CHARACTER.THIRTEEN"}
  ];

  sectionGameplay = [
    {id: "55", label: "FAQ.INDEX.GAMEPLAY.ONE"},
    {id: "56", label: "FAQ.INDEX.GAMEPLAY.TWO"},
    {id: "57", label: "FAQ.INDEX.GAMEPLAY.THREE"},
    {id: "58", label: "FAQ.INDEX.GAMEPLAY.FOUR"},
    {id: "59", label: "FAQ.INDEX.GAMEPLAY.FIVE"},
    {id: "60", label: "FAQ.INDEX.GAMEPLAY.SIX"},
    {id: "61", label: "FAQ.INDEX.GAMEPLAY.SEVEN"},
    {id: "62", label: "FAQ.INDEX.GAMEPLAY.EIGTH"},
    {id: "63", label: "FAQ.INDEX.GAMEPLAY.NINE"},
    {id: "64", label: "FAQ.INDEX.GAMEPLAY.TEN"},
    {id: "65", label: "FAQ.INDEX.GAMEPLAY.ONCE"},
    {id: "66", label: "FAQ.INDEX.GAMEPLAY.TWELVE"},
    {id: "67", label: "FAQ.INDEX.GAMEPLAY.THIRTEEN"},
    {id: "68", label: "FAQ.INDEX.GAMEPLAY.FOURTEEN"},
    {id: "69", label: "FAQ.INDEX.GAMEPLAY.FIFTEEN"},
    {id: "70", label: "FAQ.INDEX.GAMEPLAY.SIXTEEN"},
    {id: "71", label: "FAQ.INDEX.GAMEPLAY.SEVENTEEN"},
    {id: "72", label: "FAQ.INDEX.GAMEPLAY.EIGHTEEN"},
    {id: "73", label: "FAQ.INDEX.GAMEPLAY.NINETEEN"},
  ];

  sectionTecnicalAndPc = [
    {id: "74", label: "FAQ.INDEX.TECNICAL_AND_PC.ONE"},
    {id: "75", label: "FAQ.INDEX.TECNICAL_AND_PC.TWO"},
    {id: "76", label: "FAQ.INDEX.TECNICAL_AND_PC.THREE"},
    {id: "77", label: "FAQ.INDEX.TECNICAL_AND_PC.FOUR"},
    {id: "78", label: "FAQ.INDEX.TECNICAL_AND_PC.FIVE"},
    {id: "79", label: "FAQ.INDEX.TECNICAL_AND_PC.SIX"},
    {id: "80", label: "FAQ.INDEX.TECNICAL_AND_PC.SEVEN"},
    {id: "81", label: "FAQ.INDEX.TECNICAL_AND_PC.EIGTH"},
    {id: "82", label: "FAQ.INDEX.TECNICAL_AND_PC.NINE"},
    {id: "83", label: "FAQ.INDEX.TECNICAL_AND_PC.TEN"},
    {id: "84", label: "FAQ.INDEX.TECNICAL_AND_PC.ONCE"},
    {id: "85", label: "FAQ.INDEX.TECNICAL_AND_PC.TWELVE"},
    {id: "86", label: "FAQ.INDEX.TECNICAL_AND_PC.THIRTEEN"}
  ]

  sectionHistory = [
    {id: "87", label: "FAQ.INDEX.HISTORY.ONE"},
    {id: "88", label: "FAQ.INDEX.HISTORY.TWO"},
    {id: "89", label: "FAQ.INDEX.HISTORY.THREE"},
    {id: "90", label: "FAQ.INDEX.HISTORY.FOUR"},
    {id: "91", label: "FAQ.INDEX.HISTORY.FIVE"},
    {id: "92", label: "FAQ.INDEX.HISTORY.SIX"},
    {id: "93", label: "FAQ.INDEX.HISTORY.SEVEN"},
    {id: "94", label: "FAQ.INDEX.HISTORY.EIGTH"},
    {id: "95", label: "FAQ.INDEX.HISTORY.NINE"},
    {id: "96", label: "FAQ.INDEX.HISTORY.TEN"},
    {id: "97", label: "FAQ.INDEX.HISTORY.ONCE"},
    {id: "98", label: "FAQ.INDEX.HISTORY.TWELVE"},
    {id: "99", label: "FAQ.INDEX.HISTORY.THIRTEEN"},
    {id: "100", label: "FAQ.INDEX.HISTORY.FOURTEEN"},
  ]

  constructor(){

  }

  ngOnInit(){
  }

  scrollToSection(sectionId: string) {
    this.activeSection = sectionId;
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

}
