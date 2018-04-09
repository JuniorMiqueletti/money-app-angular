import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-releases-seach',
  templateUrl: './releases-seach.component.html',
  styleUrls: ['./releases-seach.component.css']
})
export class ReleasesSeachComponent {

  releases = [
    { type: 'EXPENSE', description: 'Compra de pão', dueDate: new Date(2017, 6, 30),
      payDate: null, value: 4.55, person: 'Padaria do José' },
    { type: 'RECIPE', description: 'Venda de software', dueDate: new Date(2017, 6, 10),
      payDate: new Date(2017, 6, 9), value: 80000, person: 'Atacado Brasil' },
    { type: 'EXPENSE', description: 'Impostos', dueDate: new Date(2017, 7, 20),
      payDate: null, value: 14312, person: 'Ministério da Fazenda' },
    { type: 'EXPENSE', description: 'Mensalidade de escola', dueDate: new Date(2017, 6, 5),
      payDate: new Date(2017, 5, 30), value: 800, person: 'Escola Abelha Rainha' },
    { type: 'RECIPE', description: 'Venda de carro', dueDate: new Date(2017, 8, 18),
      payDate: null, value: 55000, person: 'Sebastião Souza' },
    { type: 'EXPENSE', description: 'Aluguel', dueDate: new Date(2017, 7, 10),
      payDate: new Date(2017, 7, 9), value: 1750, person: 'Casa Nova Imóveis' },
    { type: 'EXPENSE', description: 'Mensalidade musculação', dueDate: new Date(2017, 7, 13),
      payDate: null, value: 180, person: 'Academia Top' }
  ];

}
