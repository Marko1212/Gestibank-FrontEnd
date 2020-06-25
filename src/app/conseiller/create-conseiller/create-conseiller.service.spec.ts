import { TestBed } from '@angular/core/testing';

import { CreateConseillerService } from './create-conseiller.service';

describe('CreateConseillerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CreateConseillerService = TestBed.get(CreateConseillerService);
    expect(service).toBeTruthy();
  });
});
