import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateConseillerComponent } from './create-conseiller.component';

describe('CreateConseillerComponent', () => {
  let component: CreateConseillerComponent;
  let fixture: ComponentFixture<CreateConseillerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateConseillerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateConseillerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
