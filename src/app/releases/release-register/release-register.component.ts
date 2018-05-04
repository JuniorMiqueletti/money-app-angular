import { Component, OnInit } from '@angular/core';

import { CategoryService } from './../../categories/category.service';
import { ErrorHandlerService } from './../../core/error-handler.service';

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

  categories = [];

  people = [
    { label: 'João da Silva', value: 4 },
    { label: 'Sebastião Souza', value: 9 },
    { label: 'Maria Abadia', value: 3 },
  ];

  constructor(
    private categoryService: CategoryService,
    private errorHandlerService: ErrorHandlerService
  ) { }

  ngOnInit() {
    this.loadCategories();
  }

  loadCategories() {
    return this.categoryService.findAll()
    .then(categories => {
      this.categories = categories.map(c => ({ label: c.name, value: c.id }));
    })
    .catch(error => this.errorHandlerService.handle(error));
  }

}
