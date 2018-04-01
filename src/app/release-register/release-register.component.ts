import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-release-register',
  templateUrl: './release-register.component.html',
  styleUrls: ['./release-register.component.css']
})
export class ReleaseRegisterComponent implements OnInit {

  types = [
    { label: 'Recipe', value: 'RECIPE'},
    { label: 'Expense', value: 'EXPENSE'}
  ];

  categories = [
    { label: 'Food', value: 1},
    { label: 'Transport', value: 2}
  ];

  people = [
    { label: 'João da Silva', value: 4 },
    { label: 'Sebastião Souza', value: 9 },
    { label: 'Maria Abadia', value: 3 },
  ];

  constructor() { }

  ngOnInit() {
  }

}
