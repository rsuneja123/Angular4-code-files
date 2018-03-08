import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpTrialComponent } from './http-trial.component';

describe('HttpTrialComponent', () => {
  let component: HttpTrialComponent;
  let fixture: ComponentFixture<HttpTrialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HttpTrialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpTrialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
