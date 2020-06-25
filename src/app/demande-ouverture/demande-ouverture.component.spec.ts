import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandeOuvertureComponent } from './demande-ouverture.component';

describe('DemandeOuvertureComponent', () => {
  let component: DemandeOuvertureComponent;
  let fixture: ComponentFixture<DemandeOuvertureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemandeOuvertureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandeOuvertureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
