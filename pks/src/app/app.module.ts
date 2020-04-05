import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputsModule } from '@progress/kendo-angular-inputs';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import {SearchFormComponent} from './main-page/search-form/search-form.component';
import {SearchService} from './shared/search.service';
import {HttpClientModule} from '@angular/common/http';
import {GridModule, SharedModule} from '@progress/kendo-angular-grid';





@NgModule({
  declarations: [
    AppComponent,
    SearchFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DropDownsModule,
    BrowserAnimationsModule,
    DropDownsModule,
    InputsModule,
    FormsModule,
    InputsModule,
    ReactiveFormsModule,
    DateInputsModule,
    HttpClientModule,
    SharedModule,
    GridModule
  ],
  providers: [SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
