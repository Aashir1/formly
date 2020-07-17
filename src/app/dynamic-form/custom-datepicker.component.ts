import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: "formly-datepicker",
  template: `
  <mat-form-field appearance="fill">
  <mat-label>{{to.label}}</mat-label>
  <input matInput [matDatepicker]="picker">
  <mat-datepicker-toggle matSuffix [for]="picker"></mat-datepicker-toggle>
  <mat-datepicker #picker></mat-datepicker>
</mat-form-field>
  `
})

export class CustomeDatepicker extends FieldType{ };
