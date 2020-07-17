import { Component, KeyValueDiffers } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { Validations } from './app.validations'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

//basics of formly
export class AppComponent {
  title = 'formly';
  show = false;
  form = new FormGroup({});
  model = { ip: '' };
  dynamicFields: FormlyFieldConfig[]
  fields: FormlyFieldConfig[] = [
    {
      className: "text-input",
      key: 'text',
      type: 'myinput',
      modelOptions: {
        // debounce: {
        //   default: 2000
        // },
        // updateOn:"blur"
      },
      templateOptions: {
        label: "Enter any text",
        required: true
      },
    },
    {
      key: 'Datepicker',
      type: "datepicker",
      templateOptions: {
        label: 'Datepicker',
        placeholder: "Select Date",
        description: "description",
        required: true,
        datepickerOptions: {
          min: '2020-07-16',
          max: "2020-07-20"
        },
      },
      // expressionProperties:{
      //   'templateOptions.datepickerOptions.max': "2021-01-10"
      // }
    },
    {
      key: 'ip',
      type: 'input',
      templateOptions: {
        label: "IP Address (using custom validation declared in ngModule)",
        required: true
      },
      asyncValidators: {
        ip: {
          expression: (c) => {
            return new Promise((resolve, reject) => {
              setTimeout(() => {
                resolve(/(\d{1,3}\.){3}\d{1,3}/.test(c.value));
              }, 1000)
            })
          },
          message: (error, field: FormlyFieldConfig) => `"${field.formControl.value}" is not a valid IP Address`,
        }
      },
      // wrappers:['panel'],
      // validators: {
      //   // validation: ['ip'], //if we define the validator and validation message in app module
      //   ip:{
      //     expression: (c) => /(\d{1,3}\.){3}\d{1,3}/.test(c.value),
      //     message: (error, field) => `"${field.formControl.value}" is not a valid IP Address`
      //   }
      // },

      expressionProperties: {
        // "templateOptions.disabled": "!model.text?.length" //string
        'templateOptions.disabled': (model: any, formState: any, field: FormlyFieldConfig) => { //as a function
          return !model.text
        }
      },
      // hideExpression: '!model.text'// as a string
      hideExpression: (model: any, formState: any, field: FormlyFieldConfig) => { //as a function
        return model.text === "123" ? true : false // it will hides the field if function returns true
      }

    }
  ]
  constructor() {
    console.log('data: ', Validations.getData());
    let data = Validations.getData();
    let obj = {

    }
    for (let i = 0; i < data.length; i++) {
      let obj = {};
      let fieldType = data[i].fieldType;
      switch (fieldType) {
        case 'string':
          obj = {
            className: "text-input",
            key: `${data[i].fieldAttribute}`,
            type: 'myinput',
            modelOptions: {
              // debounce: {
              //   default: 2000
              // },
              // updateOn:"blur"

            },
            // validators: {
            //   // validation: ['ip'], //if we define the validator and validation message in app module
            //   ip:{
            //     expression: (c) => /(\d{1,3}\.){3}\d{1,3}/.test(c.value),
            //     message: (error, field) => `"${field.formControl.value}" is not a valid IP Address`
            //   }
            // },
            templateOptions: {
              label: `Enter ${data[i].fieldAttribute}`,
              required: !data[i].isNull
            }
          }
      }
    }
  }
  onSubmit() {
    console.log('model: ', this.model)
  }
  toggle() { //use to for hideExpression
    this.show = !this.show;
    this.fields[1].hideExpression = this.show;
  }
}
