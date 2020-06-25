import { TestBed } from '@angular/core/testing';

import { DemandesOuverturesService } from './demandes-ouvertures.service';

describe('DemandesOuverturesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DemandesOuverturesService = TestBed.get(DemandesOuverturesService);
    expect(service).toBeTruthy();
  });
});
