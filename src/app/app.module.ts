import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {TemplateDrivenFormModule} from './template-driven-form/template-driven-form.module';
import {TemplateDrivenFormValidationModule} from './template-driven-form-validation/template-driven-form-validation.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TemplateDrivenFormModule,
    TemplateDrivenFormValidationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
