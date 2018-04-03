import { FormControl } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-message',
  template: `
    <div *ngIf="hasErrors()" class="ui-message ui-messages-error">
      {{ text }}
    </div>
  `,
  styles: [`
    .ui-messages-error {
      margin: 0;
      margin-top: 4px;
      border-radius: 5px;
    }
  `]
})
export class MessageComponent {

  @Input() error: string;
  @Input() control: FormControl;
  @Input() text: string;

  hasErrors(): boolean {
    return this.control.hasError(this.error) && this.control.dirty;
  }

}
