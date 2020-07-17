import {Component} from '@angular/core';
import {FieldType} from '@ngx-formly/core';

@Component({
  selector: `formly-field-input`,
  template: `
  <mat-form-field>
    <mat-label>{{to.label}}</mat-label>
    <input matInput type="input" [formControl] = "formControl" [formlyAttributes]="field"/>
  </mat-form-field>
  `
})

export class FormlyFieldInput extends FieldType {};
