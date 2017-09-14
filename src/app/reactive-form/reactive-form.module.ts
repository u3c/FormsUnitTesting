import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormComponent} from './reactive-form.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [ReactiveFormComponent]
})
export class ReactiveFormModule {
}
