import { ReleaseService, ReleaseFilter } from './../release.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-releases-search',
  templateUrl: './releases-search.component.html',
  styleUrls: ['./releases-search.component.css']
})
export class ReleasesSearchComponent implements OnInit {

  description: string;
  dueDateFrom: Date;
  dueDateUntil: Date;

  releases = [];

  constructor(private releaseService: ReleaseService) {}

  ngOnInit() {
    this.search();
  }

  search() {

    const filter: ReleaseFilter = {
      description: this.description,
      dueDateFrom: this.dueDateFrom,
      dueDateUntil: this.dueDateUntil
    };

    console.log(filter);

    this.releaseService.search(filter)
      .then( releases => this.releases = releases );
  }

}
