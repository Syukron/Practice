import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { TableComponent } from './table/table.component';
import { FormsModule } from '@angular/forms';
import { ExampleComponent } from './example/example.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    TableComponent,
    ExampleComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
