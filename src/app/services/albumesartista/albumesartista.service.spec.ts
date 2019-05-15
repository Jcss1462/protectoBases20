import { TestBed } from '@angular/core/testing';

import { AlbumesartistaService } from './albumesartista.service';

describe('AlbumesartistaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AlbumesartistaService = TestBed.get(AlbumesartistaService);
    expect(service).toBeTruthy();
  });
});
