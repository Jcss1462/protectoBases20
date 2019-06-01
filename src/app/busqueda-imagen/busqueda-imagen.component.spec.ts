import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusquedaImagenComponent } from './busqueda-imagen.component';

describe('BusquedaImagenComponent', () => {
  let component: BusquedaImagenComponent;
  let fixture: ComponentFixture<BusquedaImagenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusquedaImagenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusquedaImagenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
