import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuhttpComponent } from './menuhttp.component';

describe('MenuhttpComponent', () => {
  let component: MenuhttpComponent;
  let fixture: ComponentFixture<MenuhttpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuhttpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuhttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
