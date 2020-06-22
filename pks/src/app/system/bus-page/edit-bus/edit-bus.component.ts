import {Component, Inject, OnInit} from '@angular/core';
import {MainService} from '../../shared/services/main.service';
import {BusService} from '../../shared/services/bus.service';
import {Bus, BusToEdit} from '../../shared/models/bus.model';
import {formatDate} from '@angular/common';
import {MatDialog} from '@angular/material/dialog';
import {EditBusFormComponent} from './edit-bus-form/edit-bus-form.component';
import {Inspection} from '../../shared/models/inspection.model';


@Component({
  selector: 'app-edit-bus',
  templateUrl: './edit-bus.component.html',
  styleUrls: ['./edit-bus.component.css']
})
export class EditBusComponent implements OnInit {

  public view: any[];

  public inspection: Inspection;
  public insurance: Inspection;
  public editDataItem: Bus;
  public isNew: boolean;
  private busService: BusService;

  constructor(@Inject(BusService) busServiceFactory: any, private mainService: MainService, public dialog: MatDialog) {
    this.busService = busServiceFactory();
  }

  public ngOnInit(): void {
    this.mainService.getBus().subscribe((buses: Bus[]) => this.view = this.editDate(buses));
  }

  openDialog(value, isNew: boolean): void {
    const dialogRef = this.dialog.open(EditBusFormComponent, {
      data: {
        isNew,
        value
      }
    });

    // console.log(dialogRef);
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
    this.isNew = false;
    const loadedData = Promise.all(
      [this.busService.getBusInspection(dataItem.id),
        this.busService.getBusInsurance(dataItem.id)])
      .then(values => {
        this.inspection = values[0][0];
        this.insurance = values[1][0];
        return this.editDataItem = new BusToEdit(dataItem, this.inspection, this.insurance);
      });
    loadedData.then(() => this.openDialog(this.editDataItem, this.isNew));
  }


  public saveHandler(bus: Bus, isNew: boolean) {
    const isSaved = this.busService.save(bus, isNew);

    if (isSaved) {
      this.editDataItem = undefined;
      this.mainService.getBus().subscribe((buses: Bus[]) => this.view = this.editDate(buses));
    }
  }

  public removeHandler({dataItem}) {
    this.busService.remove(dataItem).then(() =>
      this.mainService.getBus()
        .subscribe((buses: Bus[]) => this.view = this.editDate(buses))
    );
  }

  private editDate(data: Bus[]): Bus[] {
    Object.keys(data).forEach(key => {
      if (data[key].inspectionExpiry != null) {
        data[key].inspectionExpiry = formatDate(data[key].inspectionExpiry, 'mediumDate', 'en-PL');
      } else {
        data[key].inspectionExpiry = 'NOT SET';
      }

      if (data[key].insuranceExpiry != null) {
        data[key].insuranceExpiry = formatDate(data[key].insuranceExpiry, 'mediumDate', 'en-PL');
      } else {
        data[key].insuranceExpiry = 'NOT SET';
      }

    });
    return data;
  }

  test(event) {
    console.log(event);
  }

  test1(event) {
    console.log(event.selectedRows[0].dataItem);
  }


}
