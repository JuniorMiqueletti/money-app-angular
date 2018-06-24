import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

import { ToastyService } from 'ng2-toasty';
import { NotAuthenticatedError } from './model/not-authenticated-error.model';

@Injectable()
export class ErrorHandlerService {

  constructor(
    private toasty: ToastyService,
    private router: Router
  ) { }

  handle(errorResponse: any) {
    let msg: string;

    if (typeof errorResponse === 'string') {
      msg = errorResponse;

    } else if (errorResponse instanceof NotAuthenticatedError) {
      msg = 'Your session expired';
      this.router.navigate(['/login']);

    } else if (errorResponse.status >= 400 && errorResponse.status <= 499) {

        let errors;
        msg = 'Error during the processing the solicitation';

        if (errorResponse.status === 403) {
          msg = 'You are not permitted to execute this action.';
        }

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
