import { Component } from '@angular/core';
import { FieldWrapper } from '@ngx-formly/core';

@Component({
  selector: "wrapper-panel",
  template: `

  <div class="wrapper-panel">
    <ng-container #fieldComponent></ng-container>
  </div>
  `
})

export class PanelWrapperComponent extends FieldWrapper { };
