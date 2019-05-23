import { TestBed } from '@angular/core/testing';

import { EdicionService } from './edicion.service';

describe('EdicionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EdicionService = TestBed.get(EdicionService);
    expect(service).toBeTruthy();
  });
});
