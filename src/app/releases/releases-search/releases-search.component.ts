import { Component, OnInit, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { ToastyService } from 'ng2-toasty';
import { ConfirmationService } from 'primeng/components/common/confirmationservice';
import { LazyLoadEvent } from 'primeng/components/common/lazyloadevent';

import { ReleaseService, ReleaseFilter } from './../release.service';
import { ErrorHandlerService } from './../../core/error-handler.service';
import { AuthService } from './../../security/auth.service';

@Component({
  selector: 'app-releases-search',
  templateUrl: './releases-search.component.html',
  styleUrls: ['./releases-search.component.css']
})
export class ReleasesSearchComponent implements OnInit {

  totalRegisters = 0;
  filter = new ReleaseFilter();
  releases = [];
  @ViewChild('table') grid;

  constructor(
    private releaseService: ReleaseService,
    private toastyService: ToastyService,
    private confirmationService: ConfirmationService,
    private errorHandlerService: ErrorHandlerService,
    private title: Title,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.title.setTitle('Financial releases search');
  }

  search(page = 0) {

    this.filter.page = page;

    this.releaseService.search(this.filter)
    .then( result => {
      this.releases = result.releases;
      this.totalRegisters = result.total;
      })
    .catch(error => this.errorHandlerService.handle(error));
  }

  confirmDelete(release: any) {
    this.confirmationService.confirm({
      message: 'Do you sure to delete?',
      accept: () => {
        this.delete(release);
      }
    });
  }

  delete(release: any) {

    this.releaseService.delete(release.id)
    .then(() => {

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
