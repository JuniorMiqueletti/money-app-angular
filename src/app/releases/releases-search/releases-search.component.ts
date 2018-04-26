import { ReleaseService, ReleaseFilter } from './../release.service';
import { Component, OnInit } from '@angular/core';
import { ToastyService } from 'ng2-toasty';

@Component({
  selector: 'app-releases-search',
  templateUrl: './releases-search.component.html',
  styleUrls: ['./releases-search.component.css']
})
export class ReleasesSearchComponent implements OnInit {

  totalRegisters = 0;
  filter = new ReleaseFilter();
  releases = [];

  constructor(
    private releaseService: ReleaseService,
    private toastyService: ToastyService) {}

  ngOnInit() {}

  search(page = 0) {

    this.filter.page = page;

    this.releaseService.search(this.filter)
    .then( result => {
      this.releases = result.releases;
      this.totalRegisters = result.total;
      });
  }

  delete(releaseId: number) {

    console.log(releaseId);

    this.releaseService.delete(releaseId)
    .then(() => {
      console.log('deleted');
      // TODO refresh page
      this.toastyService.success('Deleted successfully!');
    });
  }

}
