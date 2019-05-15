import { TestBed } from '@angular/core/testing';

import { CancionesartistaService } from './cancionesartista.service';

describe('CancionesartistaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CancionesartistaService = TestBed.get(CancionesartistaService);
    expect(service).toBeTruthy();
  });
});
