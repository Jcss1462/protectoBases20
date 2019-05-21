import { TestBed } from '@angular/core/testing';

import { BusquedacancionService } from './busquedacancion.service';

describe('BusquedacancionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BusquedacancionService = TestBed.get(BusquedacancionService);
    expect(service).toBeTruthy();
  });
});
