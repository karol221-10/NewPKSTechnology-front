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
import {SearchService} from './shared/services/search.service';
import {HttpClientModule} from '@angular/common/http';
import {GridModule, SharedModule} from '@progress/kendo-angular-grid';
import {AuthModule} from './auth/auth.module';
import { HomePageComponent } from './main-page/home-page/home-page.component';
import { ResultPageComponent } from './main-page/result-page/result-page.component';
import {MainPageRoutingModule} from './main-page/main-page-routing.module';
import {AuthService} from './shared/services/auth.service';
import {SystemModule} from './system/system.module';





@NgModule({
  declarations: [
    AppComponent,
    SearchFormComponent,
    HomePageComponent,
    ResultPageComponent
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
    GridModule,
    AuthModule,
    MainPageRoutingModule,
    SystemModule
  ],
  providers: [SearchService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
