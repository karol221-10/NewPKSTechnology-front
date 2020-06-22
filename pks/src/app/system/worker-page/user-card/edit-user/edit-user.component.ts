import {Component, Inject, OnInit} from '@angular/core';
import {UserService} from '../../../shared/services/user.service';
import {User} from '../../../shared/models/user.model';
import {MainService} from '../../../shared/services/main.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  public view;


  public editDataItem: User;
  public isNew: boolean;
  private userService: UserService;

  constructor(@Inject(UserService) userServiceFactory: any, private mainService: MainService) {
    this.userService = userServiceFactory();
  }

  public ngOnInit(): void {
    this.mainService.getUser().subscribe(x => this.view = x.users);
  }


  public addHandler() {
    this.editDataItem = new User();
    this.isNew = true;
  }

  public editHandler({dataItem}) {
    this.editDataItem = dataItem;
    this.isNew = false;
  }

  public cancelHandler() {
    this.editDataItem = undefined;
  }

  public saveHandler(user: User) {
    this.userService.save(user, this.isNew).toPromise()
      .then(() => this.mainService.getUser().subscribe(x => this.view = x.users));

    this.editDataItem = undefined;
    // this.billService.getStewardesses().subscribe(x => this.view = x);
  }

  public removeHandler({dataItem}) {
    this.userService.remove(dataItem);
    this.mainService.getUser().subscribe(x => this.view = x.users);
  }
}
