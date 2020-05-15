import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { SystemRoutingModule } from './system-routing.module';
import { SystemComponent } from './system.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { DropdownDirective } from './shared/directives/dropdown.directive';
import { MomentPipe } from './shared/pipes/moment.pipe';
import {SortPipe} from './shared/pipes/sort.pipe';
import {OrderModule} from 'ngx-order-pipe';
import {PDFExportModule} from '@progress/kendo-angular-pdf-export';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {IntlModule} from '@progress/kendo-angular-intl';
import {BodyModule, GridModule} from '@progress/kendo-angular-grid';
import {DropDownListModule, DropDownsModule} from '@progress/kendo-angular-dropdowns';
import {ButtonGroupModule, ButtonsModule} from '@progress/kendo-angular-buttons';
// @ts-ignore
import {MatTabsModule} from '@angular/material/tabs';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatTableModule} from '@angular/material/table';
import { DialogModule } from '@progress/kendo-angular-dialog';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClient, HttpClientJsonpModule, HttpClientModule} from '@angular/common/http';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { CityPageComponent } from './city-page/city-page.component';
import {CityService} from './shared/services/city.service';
import {MainService} from './shared/services/main.service';
import { EditCityComponent } from './city-page/edit-city/edit-city.component';
import { EditCityFormComponent } from './city-page/edit-city/edit-city-form/edit-city-form.component';





@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    SystemRoutingModule,
    OrderModule,
    PDFExportModule,
    BrowserAnimationsModule,
    IntlModule,
    GridModule,
    DropDownListModule,
    DropDownsModule,
    ButtonsModule,
    ButtonGroupModule,
    MatTabsModule,
    MatCheckboxModule,
    MatTableModule,
    ReactiveFormsModule,
    GridModule,
    DialogModule,
    HttpClientModule,
    HttpClientJsonpModule,
    MatSlideToggleModule,
    BodyModule,
    //SharedModule
  ],
  declarations: [
    SystemComponent,
    SidebarComponent,
    HeaderComponent,
    DropdownDirective,
    MomentPipe,
    SortPipe,
    CityPageComponent,
    EditCityComponent,
    EditCityFormComponent
  ],
  providers: [
    MainService,
    {
      deps: [HttpClient],
      provide: CityService,
      useFactory: (jsonp: HttpClient) => () => new CityService(jsonp)
    }
  ]
})
export class SystemModule {}
