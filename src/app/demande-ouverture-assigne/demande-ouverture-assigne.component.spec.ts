import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandeOuvertureAssigneComponent } from './demande-ouverture-assigne.component';

describe('DemandeOuvertureAssigneComponent', () => {
  let component: DemandeOuvertureAssigneComponent;
  let fixture: ComponentFixture<DemandeOuvertureAssigneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemandeOuvertureAssigneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandeOuvertureAssigneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
