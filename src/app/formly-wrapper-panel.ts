import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { FieldWrapper } from '@ngx-formly/core';

@Component({
  selector: `formly-wrapper-panel`,
  template: `
    <div>
      <h3>Its time to party</h3>
      <h3>{{to.lable}}</h3>
      <div>
        <ng-container #fieldComponent></ng-container>
      </div>
    </div>
  `
})

export class PanelWrapperComponent extends FieldWrapper { };
