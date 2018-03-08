import { Component, OnInit } from '@angular/core';
import { MenuModel } from '../../util/menu.model';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-menuhttp',
  templateUrl: './menuhttp.component.html',
  styleUrls: ['./menuhttp.component.css']
})
export class MenuhttpComponent implements OnInit {
  menu: MenuModel = new MenuModel;
  items: any[] = [];
  constructor(private dashService: DashboardService) { }
  createMenu(menu) {
    this.dashService.createData(menu).subscribe((data) => console.log("success"))
  }
  getMenu() {
    this.dashService.getData().subscribe((data) => { console.log("data is",data)
      const myArray = [];
      for (let key in data) {
        myArray.push(data[key])
      }
      this.items = myArray;
    }
    )
  }

  ngOnInit() {
    this.getMenu();
  }

}
