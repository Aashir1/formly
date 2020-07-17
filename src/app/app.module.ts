import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Validations } from './app.validations'
import { FormlyFieldInput } from './formly-field-input';
import { PanelWrapperComponent } from './formly-wrapper-panel'
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker'
import { MatDividerModule } from '@angular/material/divider'
import { FormlyMatDatepickerModule } from '@ngx-formly/material/datepicker'
import { DynamicFormModule } from './dynamic-form/dynamic-form.module';
import { MatNativeDateModule } from '@angular/material/core';
@NgModule({
  declarations: [
    AppComponent,
    FormlyFieldInput
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    DynamicFormModule,
    FormlyModule.forRoot({
    //   validators: [
    //     { name: 'ip', validation: Validations.IpValidator },
    //   ],
    //   validationMessages: [
    //     { name: 'ip', message: Validations.IpValidatorMessage },
    //     { name: 'required', message: 'This field is required' },
    //   ],
      types: [ //custom template
        { name: 'myinput', component: FormlyFieldInput },
      ],
    //   // wrappers: [ // wrappers
    //   //   { name: 'panel', component: PanelWrapperComponent }
    //   // ]

    }),
    FormlyMaterialModule,
    FormlyMatDatepickerModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDividerModule,
    // FormlyModule.forRoot(),

  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
