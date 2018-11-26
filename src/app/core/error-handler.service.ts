import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

import { MessageService } from 'primeng/api';

import { NotAuthenticatedError } from './model/not-authenticated-error.model';

@Injectable()
export class ErrorHandlerService {

  constructor(
    private router: Router,
    private messageService: MessageService
  ) { }

  handle(errorResponse: any) {
    let msg: string;

    if (typeof errorResponse === 'string') {
      msg = errorResponse;

    } else if (errorResponse instanceof NotAuthenticatedError) {
      msg = 'Your session expired';
      this.router.navigate(['/login']);

    } else if (errorResponse instanceof HttpErrorResponse &&
        errorResponse.status >= 400 && errorResponse.status <= 499) {

        msg = 'Error during the processing the solicitation';

        if (errorResponse.status === 403) {
          msg = 'You are not permitted to execute this action.';
        }

        try {
          msg = errorResponse.error[0].userMessage;

        } catch (e) {
          console.log('Error during parse response', e);
        }

    } else {

      msg = 'Error during the processing remote service.';
      console.log(msg, errorResponse);

    }
    this.messageService.add({severity: 'error', summary: 'Error', detail: msg});
  }

}
