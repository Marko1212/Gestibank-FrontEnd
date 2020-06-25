import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConseillerClientComponent } from './conseiller-client.component';

describe('ConseillerClientComponent', () => {
  let component: ConseillerClientComponent;
  let fixture: ComponentFixture<ConseillerClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConseillerClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConseillerClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
