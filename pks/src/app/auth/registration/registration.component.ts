import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

import {UsersService} from '../../shared/services/users.service';
import { User } from '../../shared/models/user.models';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  form: FormGroup;

  constructor( private usersService: UsersService,
               private router: Router) { }

  ngOnInit() {
    this.form = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email], this.sameEmails.bind(this)),
      'password': new FormControl(null, [Validators.required, Validators.minLength(8)]),
      'position': new FormControl(null, [Validators.required])
    });
  }

  onSubmit() {
    const {email, password, position} = this.form.value;
    const user = new User(email, password, position);

    this.usersService.createNewUser(user)
      .subscribe(() => {
        this.router.navigate(['/login'],
          {queryParams: {
              nowCanLogin: true
            }
          });
      });
  }

  sameEmails(control: FormControl): Promise<any>{
    return new Promise((resolve, reject) => {
      this.usersService.getUserByEmail(control.value)
        .subscribe((user: User) => {
          if (user) {
            resolve({sameEmail: true });
          } else {
            resolve(null);
          }
        });
    });
  }
}
