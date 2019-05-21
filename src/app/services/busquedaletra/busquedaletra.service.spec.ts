import { TestBed } from '@angular/core/testing';

import { BusquedaletraService } from './busquedaletra.service';

describe('BusquedaletraService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BusquedaletraService = TestBed.get(BusquedaletraService);
    expect(service).toBeTruthy();
  });
});
