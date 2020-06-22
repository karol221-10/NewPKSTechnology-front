import {Component, Inject} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Bus} from '../../../shared/models/bus.model';

@Component({
  selector: 'app-edit-bus-form',
  templateUrl: './edit-bus-form.component.html',
  styleUrls: ['./edit-bus-form.component.css']
})
export class EditBusFormComponent {

  public editForm: FormGroup = new FormGroup({
    'id': new FormControl(),
    'inspectionId': new FormControl(),
    'insuranceId': new FormControl(),
    'registrationNumber': new FormControl('', Validators.required),
    'inspectionType': new FormControl('', Validators.required),
    'inspectionCreationDate': new FormControl('', Validators.required),
    'inspectionExpirationDate': new FormControl('', Validators.required),
    'inspectionComment': new FormControl('', Validators.required),
    'insuranceType': new FormControl('', Validators.required),
    'insuranceCreationDate': new FormControl('', Validators.required),
    'insuranceExpirationDate': new FormControl('', Validators.required),
    'insuranceComment': new FormControl('', Validators.required),
  });

  constructor(
    public dialogRef: MatDialogRef<EditBusFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    if (data.isNew === false) {
      this.editForm.patchValue({
        'id': data.value.id,
        'inspectionId': data.value.inspectionExpiry.id,
        'insuranceId': data.value.insuranceExpiry.id,
        'registrationNumber': data.value.registrationNumber,
        'inspectionType': data.value.inspectionExpiry.type,
        'inspectionCreationDate': new Date(data.value.inspectionExpiry.creationDate),
        'inspectionExpirationDate': new Date(data.value.inspectionExpiry.expiryDate),
        'inspectionComment': data.value.inspectionExpiry.comment,
        'insuranceType': data.value.insuranceExpiry.type,
        'insuranceCreationDate': new Date(data.value.insuranceExpiry.creationDate),
        'insuranceExpirationDate': new Date(data.value.insuranceExpiry.expiryDate),
        'insuranceComment': data.value.insuranceExpiry.comment
      });
    }
  }

  public onSave(): void {
    const bus = new Bus(this.editForm.value);
    console.log(bus);
    this.dialogRef.close(bus);
  }

  public onCancel(): void {
    this.dialogRef.close();
  }

}
