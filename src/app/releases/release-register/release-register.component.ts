import { FormControl } from '@angular/forms';
import { PeopleService } from './../../people/people.service';
import { Component, OnInit } from '@angular/core';

import { CategoryService } from './../../categories/category.service';
import { ErrorHandlerService } from './../../core/error-handler.service';
import { Release } from '../../core/model/release.model';

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
  release = new Release();


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

  save(form: FormControl) {
    console.log(form);
  }

}
