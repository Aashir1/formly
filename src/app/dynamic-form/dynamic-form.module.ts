import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicFormComponent } from './dynamic-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { FormlyModule } from '@ngx-formly/core';
import { DynamicFormMain } from './dynamic-form-main.component'
import { PanelWrapperComponent } from './panel-wrapper.component';
import { FormlyFieldInput } from './custom-input-formly.component';
import { CustomeDatepicker } from './custom-datepicker.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { FormlyMatDatepickerModule } from '@ngx-formly/material/datepicker';

@NgModule({
  declarations: [
    DynamicFormComponent,
    DynamicFormMain,
    PanelWrapperComponent,
    FormlyFieldInput,
    CustomeDatepicker
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormlyMaterialModule,
    FormlyModule.forChild({
      types: [
        { name: "form-main", component: DynamicFormMain },
        { name: "input1", component: FormlyFieldInput },
        { name: 'custom-datepicker', component: CustomeDatepicker }
      ],
      wrappers: [
        { name: "panel", component: PanelWrapperComponent }
      ],
      validationMessages: [
        { name: 'required', message: "This field is required" }
      ]
    }),
    MatFormFieldModule,
    FormlyMatDatepickerModule,
    MatInputModule,
    MatDividerModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  exports: [DynamicFormComponent]
})
export class DynamicFormModule { }
