import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-gta-faq',
  standalone: true,
  imports: [TranslatePipe, CommonModule],
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
