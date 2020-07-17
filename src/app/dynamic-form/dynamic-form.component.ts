import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { Validations } from '../app.validations';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit {
  data: any[];
  form = new FormGroup({})
  model: any = {};
  fields: FormlyFieldConfig[] = [
    {
      type: 'form-main',
      fieldGroup: []
    }
  ]
  constructor() { }

  ngOnInit(): void {
    this.data = Validations.getData();
    let { data } = this;
    for (let i = 0; i < data.length; i++) {
      let obj = {};
      switch (Validations.fieldType(data[i].fieldType)) {
        case 'string':
          console.log("string")
          obj = {
            key: data[i].fieldAttribute,
            type: 'input',
            templateOptions: {
              label: `Enter ${data[i].fieldAttribute}`,
              placeholder: `Enter ${data[i].fieldAttribute}`,
              // description: 'Description',
              required: !data[i].isNull,
              appearance: "outline"
            },
            // wrappers: ['panel']
          }
          break;
        case 'datepicker':
          console.log('datepicker')
          obj = {
            className: `ele ${i}`,
            key: data[i].fieldAttribute,
            type: 'datepicker',
            templateOptions: {
              label: `Select ${data[i].fieldAttribute}`,
              placeholder: `Select ${data[i].fieldAttribute}`,
              description: 'Description',
              required: !data[i].isNull,
              appearance: 'outline'
            },
            wrappers: ['panel']
          },
            // {
            //   key: data[i].fieldAttribute,
            //   type: "custom-datepicker",
            //   templateOptions: {
            //     label: `Enter ${data[i].fieldAttribute}`,
            //     required: !data[i].isNull,
            //     placeholder: `Enter ${data[i].fieldAttribute}`,
            //     datepickerOptions: {
            //       min: '2020-07-16',
            //       max: "2020-07-20"
            //     },
            //   },
            //   wrappers: ['panel']
            // }
            this.model[`${data[i].fieldAttribute}`] = {};
          break;

        case 'dropdown':
          console.log('dropdown')
          obj = {
            className: `ele ${i}`,
            key: 'Select',
            type: 'select',
            templateOptions: {
              label: 'Select',
              placeholder: 'Placeholder',
              description: 'Description',
              appearance: 'outline',
              required: true,
              options: [ //it will be dynamic
                { value: 1, label: 'Option 1' },
                { value: 2, label: 'Option 2' },
                { value: 3, label: 'Option 3' },
                { value: 4, label: 'Option 4' },
              ],
            },
            // wrappers: ['panel']
          }
          break
      }
      Object.keys(obj).length && this.fields[0].fieldGroup.push(obj)
    }
  }

  onSubmit() {
    console.log("this.model: ", this.model, this.fields.length)
    let validations = {
      "1": 'phone and mobile number',
      "2": 'email address',
      "3": 'website url',

    }
  }
}
