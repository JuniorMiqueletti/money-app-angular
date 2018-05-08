import { FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ToastyService } from 'ng2-toasty';

import { CategoryService } from './../../categories/category.service';
import { ErrorHandlerService } from './../../core/error-handler.service';
import { Release } from '../../core/model/release.model';
import { ReleaseService } from './../release.service';
import { PeopleService } from './../../people/people.service';

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
  releaseId: number;

  constructor(
    private categoryService: CategoryService,
    private peopleService: PeopleService,
    private releaseService: ReleaseService,
    private toastyService: ToastyService,
    private errorHandlerService: ErrorHandlerService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {

    this.releaseId = this.route.snapshot.params['id'];

    if (this.releaseId) {
      this.loadRelease(this.releaseId);
    }

    this.loadCategories();
    this.loadPeople();
  }

  save(form: FormControl) {

    this.releaseService.save(this.release)
      .then(() => {
        this.toastyService.success('Release created successful!');

        form.reset();
        this.release = new Release();
      })
      .catch(error => this.errorHandlerService.handle(error));
  }

  get isEdition() {
    console.log(this.release.id);
    return Boolean(this.release.id);
  }

  private loadRelease(releaseId: number) {

    this.releaseService.findById(releaseId)
      .then(release => {
        this.release = release;
      })
      .catch(error => this.errorHandlerService.handle(error));
  }

  private loadCategories() {
    return this.categoryService.findAll()
      .then(categories => {
        this.categories = categories.map(c => ({ label: c.name, value: c.id }));
      })
      .catch(error => this.errorHandlerService.handle(error));
  }

  private loadPeople() {
    return this.peopleService.findAll()
      .then(people => {
        this.people = people.map(p => ({ label: p.name, value: p.id}));
      })
      .catch(error => this.errorHandlerService.handle(error));
  }

}
