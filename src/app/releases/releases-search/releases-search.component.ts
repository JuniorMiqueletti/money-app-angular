import { ReleaseService, ReleaseFilter } from './../release.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-releases-search',
  templateUrl: './releases-search.component.html',
  styleUrls: ['./releases-search.component.css']
})
export class ReleasesSearchComponent implements OnInit {

  filter = new ReleaseFilter();

  releases = [];

  constructor(private releaseService: ReleaseService) {}

  ngOnInit() {
    this.search();
  }

  search() {

    this.releaseService.search(this.filter)
      .then( result => {
        this.releases = result.releases;
      });
  }

}
