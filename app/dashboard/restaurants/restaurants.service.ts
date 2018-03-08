import { Injectable } from '@angular/core';

@Injectable()
export class RestaurantsService {
  restDetail: any[] = [{ name: "lord of the drinks", Time: "11am-11pm", location: "banglore" },
    { name: "lord of the drinks11", Time: "11am-11pm", location: "banglore11" },
    { name: "lord of the drinks22", Time: "11am-11pm", location: "banglore22" },
    { name: "lord of the drinks22", Time: "11am-11pm", location: "banglore22" }]
  restDetails() { return this.restDetail;}
  constructor() { }

}
