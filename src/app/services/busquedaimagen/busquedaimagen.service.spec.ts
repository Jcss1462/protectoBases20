import { TestBed } from '@angular/core/testing';

import { BusquedaimagenService } from './busquedaimagen.service';

describe('BusquedaimagenService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BusquedaimagenService = TestBed.get(BusquedaimagenService);
    expect(service).toBeTruthy();
  });
});
