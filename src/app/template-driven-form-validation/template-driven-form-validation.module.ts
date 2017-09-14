import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TemplateDrivenFormValidationComponent} from './template-driven-form-validation.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [TemplateDrivenFormValidationComponent]
})
export class TemplateDrivenFormValidationModule {
}
