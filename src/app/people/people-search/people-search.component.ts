import { Component, OnInit, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { ToastyService } from 'ng2-toasty';
import { ConfirmationService } from 'primeng/components/common/confirmationservice';
import { LazyLoadEvent } from 'primeng/components/common/lazyloadevent';

import { PeopleService, PeopleFilter } from './../people.service';
import { ErrorHandlerService } from './../../core/error-handler.service';
import { AuthService } from './../../security/auth.service';

@Component({
  selector: 'app-people-search',
  templateUrl: './people-search.component.html',
  styleUrls: ['./people-search.component.css']
})
export class PeopleSearchComponent implements OnInit {

  totalRegisters = 0;
  filter = new PeopleFilter();
  people = [];
  @ViewChild('table') grid;

  constructor(
    private peopleService: PeopleService,
    private toastyService: ToastyService,
    private confirmationService: ConfirmationService,
    private errorHandlerService: ErrorHandlerService,
    private title: Title,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.title.setTitle('People search');
  }

  search(page = 0) {

    this.filter.page = page;

    this.peopleService.search(this.filter)
      .then( result => {
        this.people = result.people;
        this.totalRegisters = result.total;
      })
      .catch(error => this.errorHandlerService.handle(error));
  }

  confirmDelete(people: any) {
    this.confirmationService.confirm({
      message: 'Do you sure to delete?',
      accept: () => {
        this.delete(people);
      }
    });
  }

  delete(people: any) {

    this.peopleService.delete(people.id)
      .then(() => {
        console.log('deleted');

        if (this.grid.first === 0) {
          this.search();
        } else {
          this.grid.first = 0;
        }

        this.toastyService.success('Deleted successfully!');
      })
      .catch(error => this.errorHandlerService.handle(error));
  }

  onChangePage(event: LazyLoadEvent) {
    const pageNumber = event.first / event.rows;
    this.search(pageNumber);
  }
}
