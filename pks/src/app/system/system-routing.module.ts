import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';


import {SystemComponent} from './system.component';
import {CityPageComponent} from './city-page/city-page.component';
import {BusPageComponent} from './bus-page/bus-page.component';



const routes: Routes = [
  {path : 'system', component: SystemComponent, children: [
    {path : 'city', component: CityPageComponent},
      {path : 'bus', component: BusPageComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class SystemRoutingModule {

}
