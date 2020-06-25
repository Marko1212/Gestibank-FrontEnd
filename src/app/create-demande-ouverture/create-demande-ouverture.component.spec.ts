import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDemandeOuvertureComponent } from './create-demande-ouverture.component';

describe('CreateDemandeOuvertureComponent', () => {
  let component: CreateDemandeOuvertureComponent;
  let fixture: ComponentFixture<CreateDemandeOuvertureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateDemandeOuvertureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateDemandeOuvertureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
