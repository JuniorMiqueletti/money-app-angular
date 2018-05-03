import { Component, OnInit } from '@angular/core';

import { ToastyService } from 'ng2-toasty';
import { ConfirmationService } from 'primeng/components/common/confirmationservice';

import { PeopleService, PeopleFilter } from './../people.service';
import { ErrorHandlerService } from './../../core/error-handler.service';

@Component({
  selector: 'app-people-search',
  templateUrl: './people-search.component.html',
  styleUrls: ['./people-search.component.css']
})
export class PeopleSearchComponent implements OnInit {

  totalRegisters = 0;
  filter = new PeopleFilter();
  people = [];

  constructor(
    private peopleService: PeopleService,
    private toastyService: ToastyService,
    private confirmationService: ConfirmationService,
    private errorHandlerService: ErrorHandlerService
  ) {}

  ngOnInit() {}

  search(page = 0) {

    this.filter.page = page;

    this.peopleService.search(this.filter)
      .then( result => {
        this.people = result.people;
        this.totalRegisters = result.total;
      });
  }

  confirmDelete(people: any) {
    this.confirmationService.confirm({
      message: 'Do you sure to delete?',
      accept: () => {

        this.delete(people);
      }
    });
  }

  delete(peopleId: number) {

    console.log(peopleId);

    this.peopleService.delete(peopleId)
    .then(() => {
      console.log('deleted');
      // TODO refresh page
      this.toastyService.success('Deleted successfully!');
      this.search(0);
    })
    .catch(error => this.errorHandlerService.handle(error));
  }
}
