import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  resultado = 0;
  iptu = 0;

  calciptu(formu: { value: { ida: any; valimo: any; }; }) {
    const idade = formu.value.ida;
    const vimovel = formu.value.valimo;

    if (idade <= 39) {
      this.iptu = 20;
    } else if (40 <= idade && idade <= 59) {
      this.iptu = 10;
    } else if (60 <= idade && idade <= 79) {
      this.iptu = 5;
    } else if (80 <= idade) {
      this.iptu = 0;
    }

    this.resultado = (this.iptu * parseFloat(vimovel)) / 100;
  }

}
