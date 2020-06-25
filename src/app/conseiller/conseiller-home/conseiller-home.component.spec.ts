import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConseillerHomeComponent } from './conseiller-home.component';

describe('ConseillerHomeComponent', () => {
  let component: ConseillerHomeComponent;
  let fixture: ComponentFixture<ConseillerHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConseillerHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConseillerHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
