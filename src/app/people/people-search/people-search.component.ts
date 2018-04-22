import { PeopleService, PeopleFilter } from './../people.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-people-search',
  templateUrl: './people-search.component.html',
  styleUrls: ['./people-search.component.css']
})
export class PeopleSearchComponent implements OnInit {

  totalRegisters = 0;
  filter = new PeopleFilter();
  people = [];

  constructor(private peopleService: PeopleService) {}

  ngOnInit() {}

  search(page = 0) {

    this.filter.page = page;

    this.peopleService.search(this.filter)
      .then( result => {
        this.people = result.people;
        this.totalRegisters = result.total;
      });
  }

}
