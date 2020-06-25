import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewConseillerComponent } from './view-conseiller.component';

describe('ViewConseillerComponent', () => {
  let component: ViewConseillerComponent;
  let fixture: ComponentFixture<ViewConseillerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewConseillerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewConseillerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
