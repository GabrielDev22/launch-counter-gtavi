import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ROUTES_MAP } from '../../utils/model/RoutesMap';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  standalone: true,
  imports: [CommonModule, RouterLink],
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private router : Router,
    private route : ActivatedRoute
  ) { }

  ngOnInit() {
  }

  get ROUTES_MAP(){
    return ROUTES_MAP
  }

}
