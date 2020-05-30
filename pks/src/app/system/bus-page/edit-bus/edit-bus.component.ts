import {Component, Inject, OnInit} from '@angular/core';
import {MainService} from '../../shared/services/main.service';
import {BusService} from '../../shared/services/bus.service';
import {Bus} from '../../shared/models/bus.model';
import {formatDate} from '@angular/common';
import {MatDialog} from '@angular/material/dialog';
import {EditBusFormComponent} from './edit-bus-form/edit-bus-form.component';


@Component({
  selector: 'app-edit-bus',
  templateUrl: './edit-bus.component.html',
  styleUrls: ['./edit-bus.component.css']
})
export class EditBusComponent implements OnInit {

  public view: any[];


  public editDataItem: Bus;
  public isNew: boolean;
  private busService: BusService;

  constructor(@Inject(BusService) busServiceFactory: any, private mainService: MainService, public dialog: MatDialog) {
    this.busService = busServiceFactory();
  }

  public ngOnInit(): void {
    this.mainService.getBus().subscribe((buses: Bus[]) => {
      Object.keys(buses).forEach(key => {
          buses[key].inspectionExpiry.expirationDate = formatDate(buses[key].inspectionExpiry.expirationDate, 'mediumDate', 'en-PL');
          buses[key].insuranceExpiry.expirationDate = formatDate(buses[key].insuranceExpiry.expirationDate, 'mediumDate', 'en-PL');
        }
      );
      return this.view = buses;
    });
  }

  openDialog(value, isNew: boolean): void {
    const dialogRef = this.dialog.open(EditBusFormComponent, {
      data: {
        isNew,
        value
      }
    });

    console.log(dialogRef);
    dialogRef.afterClosed().subscribe((result: Bus) => {
      if (result != null) {
        this.saveHandler(result, isNew);
      }
    });
  }


  public addHandler() {
    this.editDataItem = new Bus();
    this.isNew = true;
    this.openDialog(this.editDataItem, this.isNew);
  }

  public editHandler({dataItem}) {
    this.editDataItem = dataItem;
    this.isNew = false;
    this.openDialog(this.editDataItem, this.isNew);
  }


  public saveHandler(bus: Bus, isNew: boolean) {
    this.busService.save(bus, isNew).subscribe( x => console.log(x));

    this.editDataItem = undefined;
    this.mainService.getBus().subscribe((buses: Bus[]) => {
      Object.keys(buses).forEach(key => {
          buses[key].inspectionExpiry.expirationDate = formatDate(buses[key].inspectionExpiry.expirationDate, 'mediumDate', 'en-PL');
          buses[key].insuranceExpiry.expirationDate = formatDate(buses[key].insuranceExpiry.expirationDate, 'mediumDate', 'en-PL');
        }
      );
      return this.view = buses;
    });
  }

  public removeHandler({dataItem}) {
    this.busService.remove(dataItem);
    this.mainService.getBus().subscribe((buses: Bus[]) => {
      Object.keys(buses).forEach(key => {
          buses[key].inspectionExpiry.expirationDate = formatDate(buses[key].inspectionExpiry.expirationDate, 'mediumDate', 'en-PL');
          buses[key].insuranceExpiry.expirationDate = formatDate(buses[key].insuranceExpiry.expirationDate, 'mediumDate', 'en-PL');
        }
      );
      return this.view = buses;
    });
  }


}
