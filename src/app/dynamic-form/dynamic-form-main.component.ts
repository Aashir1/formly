import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: "form-main",
  template: `
  <div class="form-main">
    <h3 class="form-heading"></h3>
    <div class="form-fields-main">
    <ng-container *ngFor="let f of field.fieldGroup">
      <formly-field [field]="f"></formly-field>
    </ng-container>
    </div>
  </div>
  `
})

export class DynamicFormMain extends FieldType { };
