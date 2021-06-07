import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteestadocuentaproveedorFormComponent } from './reporteestadocuentaproveedor-form.component';

describe('ReporteestadocuentaproveedorFormComponent', () => {
  let component: ReporteestadocuentaproveedorFormComponent;
  let fixture: ComponentFixture<ReporteestadocuentaproveedorFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReporteestadocuentaproveedorFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReporteestadocuentaproveedorFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
