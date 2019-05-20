import { TestBed } from '@angular/core/testing';

import { BusquedaartistaService } from './busquedaartista.service';

describe('BusquedaartistaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BusquedaartistaService = TestBed.get(BusquedaartistaService);
    expect(service).toBeTruthy();
  });
});
