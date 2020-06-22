import { Component, EventEmitter, Input, Output } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import { Worker} from '../../../../shared/models/worker.model';

@Component({
  selector: 'app-edit-worker-form',
  templateUrl: './edit-worker-form.component.html',
  styleUrls: ['./edit-worker-form.component.css']
})
export class EditWorkerFormComponent {

  public active = false;
  public editForm: FormGroup = new FormGroup({
    'driverLicenseNumber': new FormControl(),
    'email': new FormControl(),
    'login': new FormControl(),
    'name': new FormControl(),
    'password': new FormControl(),
    'personIdNumber': new FormControl(),
    'pesel': new FormControl(),
    'surname': new FormControl()
  });

  @Input() public isNew = false;

  @Input() public set model(worker: Worker) {
    this.editForm.reset(worker);

    this.active = worker !== undefined;
  }

  @Output() cancel: EventEmitter<any> = new EventEmitter();
  @Output() save: EventEmitter<Worker> = new EventEmitter();

  public onSave(e): void {
    e.preventDefault();
    this.save.emit(this.editForm.value);
    this.active = false;
  }

  public onCancel(e): void {
    e.preventDefault();
    this.closeForm();
  }

  public closeForm(): void {
    this.active = false;
    this.cancel.emit();
  }
}
