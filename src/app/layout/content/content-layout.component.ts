import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { GtaVIComponent } from './gtaVI/gtaVI.component';

@Component({
  selector: 'app-content-layout',
  templateUrl: './content-layout.component.html',
  standalone: true,
  imports: [CommonModule, GtaVIComponent],
  styleUrls: ['./content-layout.component.scss']
})
export class ContentLayoutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
