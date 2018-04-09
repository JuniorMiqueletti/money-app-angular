import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-people-search',
  templateUrl: './people-search.component.html',
  styleUrls: ['./people-search.component.css']
})
export class PeopleSearchComponent {

  people = [
    { name: 'Manoel Pinheiro', city: 'Uberlândia', state: 'MG', active: true },
    { name: 'Sebastião da Silva', city: 'São Paulo', state: 'SP', active: false },
    { name: 'Carla Souza', city: 'Florianópolis', state: 'SC', active: true },
    { name: 'Luís Pereira', city: 'Curitiba', state: 'PR', active: true },
    { name: 'Vilmar Andrade', city: 'Rio de Janeiro', state: 'RJ', active: false },
    { name: 'Paula Maria', city: 'Uberlândia', state: 'MG', active: true }
  ];

}
