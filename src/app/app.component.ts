import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  releases = [
    { type: 'EXPENSIVE', description: 'Compra de pão', dueDate: '30/06/2017',
      payDate: null, value: 4.55, person: 'Padaria do José' },
    { type: 'RECIPE', description: 'Venda de software', dueDate: '10/06/2017',
      payDate: '09/06/2017', value: 80000, person: 'Atacado Brasil' },
    { type: 'EXPENSIVE', description: 'Impostos', dueDate: '20/07/2017',
      payDate: null, value: 14312, person: 'Ministério da Fazenda' },
    { type: 'EXPENSIVE', description: 'Mensalidade de escola', dueDate: '05/06/2017',
      payDate: '30/05/2017', value: 800, person: 'Escola Abelha Rainha' },
    { type: 'RECIPE', description: 'Venda de carro', dueDate: '18/08/2017',
      payDate: null, value: 55000, person: 'Sebastião Souza' },
    { type: 'EXPENSIVE', description: 'Aluguel', dueDate: '10/07/2017',
      payDate: '09/07/2017', value: 1750, person: 'Casa Nova Imóveis' },
    { type: 'EXPENSIVE', description: 'Mensalidade musculação', dueDate: '13/07/2017',
      payDate: null, value: 180, person: 'Academia Top' }
  ];
}
