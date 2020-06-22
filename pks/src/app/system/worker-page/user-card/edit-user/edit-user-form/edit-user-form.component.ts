import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {User} from '../../../../shared/models/user.model';

@Component({
  selector: 'app-edit-user-form',
  templateUrl: './edit-user-form.component.html',
  styleUrls: ['./edit-user-form.component.css']
})
export class EditUserFormComponent {

  public active = false;
  public editForm: FormGroup = new FormGroup({
    'email': new FormControl(),
    'login': new FormControl(),
    'name': new FormControl(),
    'isWorker': new FormControl(),
    'surname': new FormControl()
  });

  @Input() public isNew = false;

  @Input() public set model(user: User) {
    this.editForm.reset(user);

    this.active = user !== undefined;
  }

  @Output() cancel: EventEmitter<any> = new EventEmitter();
  @Output() save: EventEmitter<User> = new EventEmitter();

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
