import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { LazyLoadEvent } from 'primeng/components/common/lazyloadevent';

@Component({
  selector: 'app-people-grid',
  templateUrl: './people-grid.component.html',
  styleUrls: ['./people-grid.component.css']
})
export class PeopleGridComponent implements OnInit {

  @Input() people = [];
  @Input() pageSize = 5;
  @Input() totalRegisters: number;

  @Output() changePageEmitter: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onChangePage(event: LazyLoadEvent) {
    const pageNumber = event.first / event.rows;
    this.changePageEmitter.emit(pageNumber);
  }

}
