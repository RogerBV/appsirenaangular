import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportelibrocajabancosFormComponent } from './reportelibrocajabancos-form.component';

describe('ReportelibrocajabancosFormComponent', () => {
  let component: ReportelibrocajabancosFormComponent;
  let fixture: ComponentFixture<ReportelibrocajabancosFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportelibrocajabancosFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportelibrocajabancosFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
