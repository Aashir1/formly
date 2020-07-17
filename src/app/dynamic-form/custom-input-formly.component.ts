import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';


@Component({
  selector: 'formly-field-input',
  template: `
  <mat-form-field appearance='outline' class="example-full-width">
    <mat-label>{{to.label}}</mat-label>
    <input matInput [formControl]="formControl" [formlyAttributes]="field" />
  </mat-form-field>
  `
})

export class FormlyFieldInput extends FieldType { }
