import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MeuPrimeiroGraficoComponent } from './meu-primeiro-grafico/meu-primeiro-grafico.component';
import { NgChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [AppComponent, MeuPrimeiroGraficoComponent],
  imports: [BrowserModule, NgChartsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
