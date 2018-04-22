import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { LazyLoadEvent } from 'primeng/components/common/lazyloadevent';

@Component({
  selector: 'app-releases-grid',
  templateUrl: './releases-grid.component.html',
  styleUrls: ['./releases-grid.component.css']
})
export class ReleasesGridComponent implements OnInit {

  @Input() releases = [];
  @Input() pageSize = 5;
  @Input() totalRegisters: number;

  @Output() changePageEmitter: EventEmitter<any> = new EventEmitter();
  @Output() idDeleteEmitter: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onChangePage(event: LazyLoadEvent) {
    const pageNumber = event.first / event.rows;
    this.changePageEmitter.emit(pageNumber);
  }

  sendIdReleseDelete(release: any) {
    this.idDeleteEmitter.emit(release.id);
  }

}
