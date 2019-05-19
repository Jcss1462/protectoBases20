import { TestBed } from '@angular/core/testing';

import { CancionesalbumService } from './cancionesalbum.service';

describe('CancionesalbumService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CancionesalbumService = TestBed.get(CancionesalbumService);
    expect(service).toBeTruthy();
  });
});
