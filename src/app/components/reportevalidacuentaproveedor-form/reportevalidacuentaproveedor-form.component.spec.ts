import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportevalidacuentaproveedorFormComponent } from './reportevalidacuentaproveedor-form.component';

describe('ReportevalidacuentaproveedorFormComponent', () => {
  let component: ReportevalidacuentaproveedorFormComponent;
  let fixture: ComponentFixture<ReportevalidacuentaproveedorFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportevalidacuentaproveedorFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportevalidacuentaproveedorFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
