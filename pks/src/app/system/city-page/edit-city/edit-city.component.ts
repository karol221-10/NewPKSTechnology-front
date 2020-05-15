import {Component, Inject, OnInit} from '@angular/core';
import {City} from '../../shared/models/city.model';
import {CityService} from '../../shared/services/city.service';
import {MainService} from '../../shared/services/main.service';

@Component({
  selector: 'app-edit-city',
  templateUrl: './edit-city.component.html',
  styleUrls: ['./edit-city.component.css']
})
export class EditCityComponent implements OnInit {

  public view: any[];


  public editDataItem: City;
  public isNew: boolean;
  private cityService: CityService;

  constructor(@Inject(CityService) cityServiceFactory: any, private mainService: MainService) {
    this.cityService = cityServiceFactory();
  }

  public ngOnInit(): void {
    this.mainService.getCity().subscribe(x => this.view = x);
  }


  public addHandler() {
    this.editDataItem = new City();
    this.isNew = true;
  }

  public editHandler({dataItem}) {
    this.editDataItem = dataItem;
    this.isNew = false;
  }

  public cancelHandler() {
    this.editDataItem = undefined;
  }

  public saveHandler(city: City) {
    this.cityService.save(city, this.isNew).subscribe( x => console.log(x));

    this.editDataItem = undefined;
    this.mainService.getCity().subscribe(x => this.view = x);
  }

  public removeHandler({dataItem}) {
    this.cityService.remove(dataItem);
    this.mainService.getCity().subscribe(x => this.view = x);
  }

}
