import { TestBed } from '@angular/core/testing';

import { ImagenesartistasService } from './imagenesartistas.service';

describe('ImagenesartistasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ImagenesartistasService = TestBed.get(ImagenesartistasService);
    expect(service).toBeTruthy();
  });
});
