import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {City} from '../../../shared/models/city.model';


@Component({
  selector: 'app-edit-city-form',
  templateUrl: './edit-city-form.component.html',
  styleUrls: ['./edit-city-form.component.css']
})
export class EditCityFormComponent {

  public active = false;
  public editForm: FormGroup = new FormGroup({
    'id': new FormControl(),
    'name': new FormControl('', Validators.required)
  });

  @Input() public isNew = false;

  @Input() public set model(city: City) {
    this.editForm.reset(city);

    this.active = city !== undefined;
  }

  @Output() cancel: EventEmitter<any> = new EventEmitter();
  @Output() save: EventEmitter<City> = new EventEmitter();

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
