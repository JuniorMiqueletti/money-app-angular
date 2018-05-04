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

    } else if (errorResponse.status >= 400 && errorResponse.status <= 499) {

        let errors;
        msg = 'Error during the processing the solicitation';

        try {
          errors = errorResponse.json();

          msg = errors[0].userMessage;

        } catch (e) {
          console.log('Error during parse response', e);
        }

    } else {

      msg = 'Error during the processing remote service.';
      console.log(msg, errorResponse);

    }

    this.toasty.error(msg);
  }

}
