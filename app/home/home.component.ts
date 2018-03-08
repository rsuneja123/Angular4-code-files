import { Component, OnInit,OnDestroy } from '@angular/core';
import { Subscription, Observer } from 'rxjs/Rx';
import { Observable } from 'rxjs';
import { Trial1Service } from './trial1.service';
import { ICarouselConfig, AnimationConfig } from 'angular4-carousel';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  public webarray = [];
  
  ngOnDestroy() {
    console.log("onDestroy calld");


  }
  constructor(private trialService: Trial1Service) { }
  public imageSources: string[] = [
    'app/assets/resort.jpeg',
    'app/assets/resort.jpeg'
    
  ];

  public config: ICarouselConfig = {
    verifyBeforeLoad: true,
    log: false,
    animation: true,
    animationType: AnimationConfig.SLIDE,
    autoplay: true,
    autoplayDelay: 2000,
    stopAutoplayMinWidth: 768
  };

  ngOnInit() {
    this.trialService.getData().subscribe(data => this.webarray = data); 
    let myObservable: Observable<string> = Observable.create((Observer: Observer<string>) => {
      setTimeout(() => {
        Observer.next("first")
      }, 2000)
      setTimeout(() => {
        Observer.next("second")
      }, 4000)
      setTimeout(() => {
        Observer.next("third")
      }, 6000)
      setTimeout(() => {
        Observer.next("fourth")
      }, 8000)
      setTimeout(() => {
        Observer.error("!!!error")
      }, 5000)
      setTimeout(() => {
        Observer.complete()
      }, 4500)
    })
    myObservable.subscribe(
      (data: string) => { console.log("handler", data) },
      (error) => { console.log("error is", error)},
      () => { console.log("completed") }
    )


  }
}
