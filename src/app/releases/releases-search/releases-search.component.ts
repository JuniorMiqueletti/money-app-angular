import { ReleaseService } from './../release.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-releases-search',
  templateUrl: './releases-search.component.html',
  styleUrls: ['./releases-search.component.css']
})
export class ReleasesSearchComponent implements OnInit {

  description: string;
  releases = [];

  constructor(private releaseService: ReleaseService) {}

  ngOnInit() {
    this.search();
  }

  search() {
    this.releaseService.search({ description: this.description })
      .then( releases => this.releases = releases );
  }

}
