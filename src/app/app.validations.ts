
import { FormlyFieldConfig } from '@ngx-formly/core';
import { FormControl, ValidationErrors } from '@angular/forms';

export class Validations {
  static IpValidatorMessage(err, field: FormlyFieldConfig) {
    return `${field.formControl.value} is not a valid IP Address`
  }

  static IpValidator(control: FormControl): ValidationErrors {
    return /(\d{1,3}\.){3}\d{1,3}/.test(control.value) ? null : { 'ip': true };
  }

  static getData() {
    return JSON.parse(JSON.stringify(this.jsonData))?.response;
  }

  static fieldType(type) {
    let obj = {
      0: 'string',
      1: 'number',
      2: 'datepicker',
      3: 'checkbox', //for boolean type
      4: 'dropdown'
    }

    return obj[type] || obj[2]
  }

  static jsonData = {
    "response": [
      {
        "id": 1,
        "createdDate": "2020-04-20T16:41:12.144+0000",
        "createdBy": "asaad.khurshid@binaryvibes.com",
        "lastModifiedDate": "2020-04-20T16:41:12.144+0000",
        "lastModifiedBy": "asaad.khurshid@binaryvibes.com",
        "isDeleted": false,
        "fieldAttribute": "cutover date",
        "fieldType": 3,
        "processTypeId": 2,
        "isNull": false,
        "isNullUpdate": false,
        "isListFiltered": true,
        "characterLength": "",
        "maxMin": "",
        "enumName": "",
        "serviceName": "",
        "docName": "",
        "attributeName": "",
        "processType": {
          "id": 2,
          "createdDate": "2020-04-20T16:29:45.818+0000",
          "createdBy": "asaad.khurshid@binaryvibes.com",
          "lastModifiedDate": "2020-04-20T16:29:45.818+0000",
          "lastModifiedBy": "asaad.khurshid@binaryvibes.com",
          "isDeleted": false,
          "process": "Product Cutover",
          "handlerType": 0,
          "performersList": [
            {
              "id": 1,
              "createdDate": "2020-04-20T16:29:45.883+0000",
              "createdBy": "asaad.khurshid@binaryvibes.com",
              "lastModifiedDate": "2020-04-20T16:29:45.883+0000",
              "lastModifiedBy": "asaad.khurshid@binaryvibes.com",
              "isDeleted": false,
              "performerType": "STAKEHOLDER",
              "status": "Start"
            },
            {
              "id": 2,
              "createdDate": "2020-04-20T16:29:45.903+0000",
              "createdBy": "asaad.khurshid@binaryvibes.com",
              "lastModifiedDate": "2020-04-20T16:29:45.903+0000",
              "lastModifiedBy": "asaad.khurshid@binaryvibes.com",
              "isDeleted": false,
              "performerType": "PRODUCT",
              "status": "Start"
            }
          ]
        },
        "isActive": true
      },
      {
        "id": 2,
        "createdDate": "2020-04-20T16:43:18.593+0000",
        "createdBy": "asaad.khurshid@binaryvibes.com",
        "lastModifiedDate": "2020-04-20T16:43:18.593+0000",
        "lastModifiedBy": "asaad.khurshid@binaryvibes.com",
        "isDeleted": false,
        "fieldAttribute": "cutover by",
        "fieldType": 0,
        "processTypeId": 2,
        "isNull": false,
        "isNullUpdate": false,
        "isListFiltered": false,
        "characterLength": "1-999",
        "maxMin": "",
        "enumName": "",
        "serviceName": "hr-service",
        "docName": "employee",
        "attributeName": "firstName",
        "processType": {
          "id": 2,
          "createdDate": "2020-04-20T16:29:45.818+0000",
          "createdBy": "asaad.khurshid@binaryvibes.com",
          "lastModifiedDate": "2020-04-20T16:29:45.818+0000",
          "lastModifiedBy": "asaad.khurshid@binaryvibes.com",
          "isDeleted": false,
          "process": "Product Cutover",
          "handlerType": 0,
          "performersList": [
            {
              "id": 1,
              "createdDate": "2020-04-20T16:29:45.883+0000",
              "createdBy": "asaad.khurshid@binaryvibes.com",
              "lastModifiedDate": "2020-04-20T16:29:45.883+0000",
              "lastModifiedBy": "asaad.khurshid@binaryvibes.com",
              "isDeleted": false,
              "performerType": "STAKEHOLDER",
              "status": "Start"
            },
            {
              "id": 2,
              "createdDate": "2020-04-20T16:29:45.903+0000",
              "createdBy": "asaad.khurshid@binaryvibes.com",
              "lastModifiedDate": "2020-04-20T16:29:45.903+0000",
              "lastModifiedBy": "asaad.khurshid@binaryvibes.com",
              "isDeleted": false,
              "performerType": "PRODUCT",
              "status": "Start"
            }
          ]
        },
        "isActive": true
      },
      {
        "id": 3,
        "createdDate": "2020-04-20T16:43:58.907+0000",
        "createdBy": "asaad.khurshid@binaryvibes.com",
        "lastModifiedDate": "2020-04-20T16:43:58.907+0000",
        "lastModifiedBy": "asaad.khurshid@binaryvibes.com",
        "isDeleted": false,
        "fieldAttribute": "lead by",
        "fieldType": 0,
        "processTypeId": 2,
        "isNull": false,
        "isNullUpdate": false,
        "isListFiltered": true,
        "characterLength": "1-999",
        "maxMin": "",
        "enumName": "",
        "serviceName": "hr-service",
        "docName": "employee",
        "attributeName": "firstName",
        "processType": {
          "id": 2,
          "createdDate": "2020-04-20T16:29:45.818+0000",
          "createdBy": "asaad.khurshid@binaryvibes.com",
          "lastModifiedDate": "2020-04-20T16:29:45.818+0000",
          "lastModifiedBy": "asaad.khurshid@binaryvibes.com",
          "isDeleted": false,
          "process": "Product Cutover",
          "handlerType": 0,
          "performersList": [
            {
              "id": 1,
              "createdDate": "2020-04-20T16:29:45.883+0000",
              "createdBy": "asaad.khurshid@binaryvibes.com",
              "lastModifiedDate": "2020-04-20T16:29:45.883+0000",
              "lastModifiedBy": "asaad.khurshid@binaryvibes.com",
              "isDeleted": false,
              "performerType": "STAKEHOLDER",
              "status": "Start"
            },
            {
              "id": 2,
              "createdDate": "2020-04-20T16:29:45.903+0000",
              "createdBy": "asaad.khurshid@binaryvibes.com",
              "lastModifiedDate": "2020-04-20T16:29:45.903+0000",
              "lastModifiedBy": "asaad.khurshid@binaryvibes.com",
              "isDeleted": false,
              "performerType": "PRODUCT",
              "status": "Start"
            }
          ]
        },
        "isActive": true
      },
      {
        "id": 4,
        "createdDate": "2020-04-20T16:45:04.935+0000",
        "createdBy": "asaad.khurshid@binaryvibes.com",
        "lastModifiedDate": "2020-04-20T16:45:04.935+0000",
        "lastModifiedBy": "asaad.khurshid@binaryvibes.com",
        "isDeleted": false,
        "fieldAttribute": "payment type",
        "fieldType": 4,
        "processTypeId": 2,
        "isNull": false,
        "isNullUpdate": false,
        "isListFiltered": false,
        "characterLength": "",
        "maxMin": "",
        "enumName": "paymenttype",
        "serviceName": "internal",
        "docName": "",
        "attributeName": "",
        "processType": {
          "id": 2,
          "createdDate": "2020-04-20T16:29:45.818+0000",
          "createdBy": "asaad.khurshid@binaryvibes.com",
          "lastModifiedDate": "2020-04-20T16:29:45.818+0000",
          "lastModifiedBy": "asaad.khurshid@binaryvibes.com",
          "isDeleted": false,
          "process": "Product Cutover",
          "handlerType": 0,
          "performersList": [
            {
              "id": 1,
              "createdDate": "2020-04-20T16:29:45.883+0000",
              "createdBy": "asaad.khurshid@binaryvibes.com",
              "lastModifiedDate": "2020-04-20T16:29:45.883+0000",
              "lastModifiedBy": "asaad.khurshid@binaryvibes.com",
              "isDeleted": false,
              "performerType": "STAKEHOLDER",
              "status": "Start"
            },
            {
              "id": 2,
              "createdDate": "2020-04-20T16:29:45.903+0000",
              "createdBy": "asaad.khurshid@binaryvibes.com",
              "lastModifiedDate": "2020-04-20T16:29:45.903+0000",
              "lastModifiedBy": "asaad.khurshid@binaryvibes.com",
              "isDeleted": false,
              "performerType": "PRODUCT",
              "status": "Start"
            }
          ]
        },
        "isActive": true
      },
      {
        "id": 5,
        "createdDate": "2020-04-20T16:45:28.098+0000",
        "createdBy": "asaad.khurshid@binaryvibes.com",
        "lastModifiedDate": "2020-04-20T16:45:28.098+0000",
        "lastModifiedBy": "asaad.khurshid@binaryvibes.com",
        "isDeleted": false,
        "fieldAttribute": "category",
        "fieldType": 4,
        "processTypeId": 2,
        "isNull": false,
        "isNullUpdate": false,
        "isListFiltered": true,
        "characterLength": "",
        "maxMin": "",
        "enumName": "categorytype",
        "serviceName": "internal",
        "docName": "",
        "attributeName": "",
        "processType": {
          "id": 2,
          "createdDate": "2020-04-20T16:29:45.818+0000",
          "createdBy": "asaad.khurshid@binaryvibes.com",
          "lastModifiedDate": "2020-04-20T16:29:45.818+0000",
          "lastModifiedBy": "asaad.khurshid@binaryvibes.com",
          "isDeleted": false,
          "process": "Product Cutover",
          "handlerType": 0,
          "performersList": [
            {
              "id": 1,
              "createdDate": "2020-04-20T16:29:45.883+0000",
              "createdBy": "asaad.khurshid@binaryvibes.com",
              "lastModifiedDate": "2020-04-20T16:29:45.883+0000",
              "lastModifiedBy": "asaad.khurshid@binaryvibes.com",
              "isDeleted": false,
              "performerType": "STAKEHOLDER",
              "status": "Start"
            },
            {
              "id": 2,
              "createdDate": "2020-04-20T16:29:45.903+0000",
              "createdBy": "asaad.khurshid@binaryvibes.com",
              "lastModifiedDate": "2020-04-20T16:29:45.903+0000",
              "lastModifiedBy": "asaad.khurshid@binaryvibes.com",
              "isDeleted": false,
              "performerType": "PRODUCT",
              "status": "Start"
            }
          ]
        },
        "isActive": true
      }
    ]
  }
}
