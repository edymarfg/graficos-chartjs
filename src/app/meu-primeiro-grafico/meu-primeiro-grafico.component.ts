import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-meu-primeiro-grafico',
  templateUrl: './meu-primeiro-grafico.component.html',
  styleUrls: ['./meu-primeiro-grafico.component.css'],
})
export class MeuPrimeiroGraficoComponent implements OnInit {
  @ViewChild('meuCanvas', { static: true }) elemento!: ElementRef;

  constructor() {}

  ngOnInit(): void {
    new Chart(this.elemento.nativeElement, {
      type: 'line',
      data: {
        labels: [
          'Janeiro',
          'Fevereiro',
          'Março',
          'Abril',
          'Maio',
          'Junho',
          'Julho',
          'Agosto',
          'Setembro',
          'Outubro',
          'Novembro',
          'Dezembro',
        ],
        datasets: [
          {
            data: [45, 543, 75, 345, 12, 34, 7, 45, 87, 45, 23, 765],
            borderColor: 'green',
            backgroundColor: 'green',
            pointBackgroundColor: 'green',
            pointBorderColor: 'green',
            fill: false,
            label: 'Green graph',
          },
          {
            data: [23, 45, 76, 34, 6, 7, 34, 78, 234, 56, 23, 56],
            borderColor: 'yellow',
            backgroundColor: 'yellow',
            pointBackgroundColor: 'yellow',
            pointBorderColor: 'yellow',
            fill: false,
            label: 'Yellow graph',
          },
        ],
      },

      options: {
        responsive: true,
        interaction: {
          mode: 'point',
        },
        onClick: (e, elements) => {
          console.log('CLICOU', e);
          console.log('elements', elements);
        },
        animation: { easing: 'easeOutCirc' },
        plugins: {
          legend: {
            display: true,
          },
        },
      },
    });
  }
}
