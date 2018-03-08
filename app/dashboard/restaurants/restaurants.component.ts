import { Component, OnInit } from '@angular/core';
import { RestaurantsService } from './restaurants.service';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {
  restssDetail: any[];
  constructor(private restService: RestaurantsService) { }

  ngOnInit() {
    this.restssDetail = this.restService.restDetails();
  }

}
