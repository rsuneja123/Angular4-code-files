import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../header.service';

@Component({
  selector: 'app-header1',
  templateUrl: './header1.component.html',
  styleUrls: ['./header1.component.css']
})
export class Header1Component implements OnInit {
  menus: any[];
  constructor(private headerService:HeaderService) { }

  ngOnInit() {
    this.menus = this.headerService.getMenus();
  }

}
