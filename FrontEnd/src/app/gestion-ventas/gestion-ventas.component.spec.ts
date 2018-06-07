import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionVentasComponent } from './gestion-ventas.component';

describe('GestionVentasComponent', () => {
  let component: GestionVentasComponent;
  let fixture: ComponentFixture<GestionVentasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionVentasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionVentasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
