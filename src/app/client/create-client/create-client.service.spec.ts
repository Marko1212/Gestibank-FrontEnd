import { TestBed } from '@angular/core/testing';

import { CreateClientService } from './create-client.service';

describe('CreateClientService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CreateClientService = TestBed.get(CreateClientService);
    expect(service).toBeTruthy();
  });
});
