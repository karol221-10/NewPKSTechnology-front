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
import { BusPageComponent } from './bus-page/bus-page.component';
import { EditBusComponent } from './bus-page/edit-bus/edit-bus.component';
import { EditBusFormComponent } from './bus-page/edit-bus/edit-bus-form/edit-bus-form.component';
import {BusService} from './shared/services/bus.service';
import {MatButtonModule, MatCardModule, MatDatepickerModule, MatDialogModule, MatInputModule} from '@angular/material';
import {MatFormFieldModule} from '@angular/material';
import {DateInputsModule} from '@progress/kendo-angular-dateinputs';
import {MatNativeDateModule} from '@angular/material/core';
import { SchedulePageComponent } from './schedule-page/schedule-page.component';
import { WorkerPageComponent } from './worker-page/worker-page.component';
import { EditScheduleComponent } from './schedule-page/edit-schedule/edit-schedule.component';
import { EditScheduleFormComponent } from './schedule-page/edit-schedule/edit-schedule-form/edit-schedule-form.component';
import { WorkerCardComponent } from './worker-page/worker-card/worker-card.component';
import { UserCardComponent } from './worker-page/user-card/user-card.component';
import { EditWorkerComponent } from './worker-page/worker-card/edit-worker/edit-worker.component';
import { EditWorkerFormComponent } from './worker-page/worker-card/edit-worker/edit-worker-form/edit-worker-form.component';
import { EditUserComponent } from './worker-page/user-card/edit-user/edit-user.component';
import { EditUserFormComponent } from './worker-page/user-card/edit-user/edit-user-form/edit-user-form.component';
import {WorkerService} from './shared/services/worker.service';
import {UserService} from './shared/services/user.service';
import {CheckBoxModule} from '@progress/kendo-angular-inputs';







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
    MatDatepickerModule,
    MatFormFieldModule,
    DateInputsModule,
    MatNativeDateModule,
    MatInputModule,
    MatDialogModule,
    MatButtonModule,
    MatCardModule,
    CheckBoxModule,
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
    EditCityFormComponent,
    BusPageComponent,
    EditBusComponent,
    EditBusFormComponent,
    SchedulePageComponent,
    WorkerPageComponent,
    EditScheduleComponent,
    EditScheduleFormComponent,
    WorkerCardComponent,
    UserCardComponent,
    EditWorkerComponent,
    EditWorkerFormComponent,
    EditUserComponent,
    EditUserFormComponent
  ],
  providers: [
    MainService,
    {
      deps: [HttpClient],
      provide: CityService,
      useFactory: (jsonp: HttpClient) => () => new CityService(jsonp)
    },
    {
      deps: [HttpClient],
      provide: BusService,
      useFactory: (jsonp: HttpClient) => () => new BusService(jsonp)
    },
    {
      deps: [HttpClient],
      provide: WorkerService,
      useFactory: (jsonp: HttpClient) => () => new WorkerService(jsonp)
    },
    {
      deps: [HttpClient],
      provide: UserService,
      useFactory: (jsonp: HttpClient) => () => new UserService(jsonp)
    }
  ],
  entryComponents: [EditBusFormComponent]
})
export class SystemModule {}
