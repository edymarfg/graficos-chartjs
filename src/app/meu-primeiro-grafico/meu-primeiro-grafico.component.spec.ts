import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeuPrimeiroGraficoComponent } from './meu-primeiro-grafico.component';

describe('MeuPrimeiroGraficoComponent', () => {
  let component: MeuPrimeiroGraficoComponent;
  let fixture: ComponentFixture<MeuPrimeiroGraficoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeuPrimeiroGraficoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeuPrimeiroGraficoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
