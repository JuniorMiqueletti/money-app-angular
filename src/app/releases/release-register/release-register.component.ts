import { PeopleService } from './../../people/people.service';
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

  people = [];

  constructor(
    private categoryService: CategoryService,
    private peopleService: PeopleService,
    private errorHandlerService: ErrorHandlerService
  ) { }

  ngOnInit() {
    this.loadCategories();
    this.loadPeople();
  }

  loadCategories() {
    return this.categoryService.findAll()
    .then(categories => {
      this.categories = categories.map(c => ({ label: c.name, value: c.id }));
    })
    .catch(error => this.errorHandlerService.handle(error));
  }

  loadPeople() {
    return this.peopleService.findAll()
    .then(people => {
      this.people = people.map(p => ({ label: p.name, value: p.id}));
    })
    .catch(error => this.errorHandlerService.handle(error));
  }

}
