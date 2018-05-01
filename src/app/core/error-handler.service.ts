import { ToastyService } from 'ng2-toasty';
import { Injectable } from '@angular/core';

@Injectable()
export class ErrorHandlerService {

  constructor(
    private toasty: ToastyService
  ) { }

  handle(errorResponse: any) {
    let msg: string;

    if (errorResponse === 'string') {
      msg = errorResponse;
    } else {
      msg = 'Error during the processing remote service.';
      console.log(msg, errorResponse);
    }

    this.toasty.error(msg);
  }

}
