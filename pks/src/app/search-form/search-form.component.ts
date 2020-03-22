import { Component, OnInit } from '@angular/core';
import {FormGroup, NgForm, FormControl} from '@angular/forms';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {
  form: FormGroup;
  public min: Date;
  public max: Date = new Date(2000, 11, 31, 22);
  public format: any = 'MM/dd/yyyy';
  constructor() { }

  ngOnInit() {
    this.form = new FormGroup({
      firs_name: new FormControl(null),
      second_name: new FormControl(null),
      checkIn: new FormControl(null),
      from: new FormControl(null),
      to: new FormControl(null),
      pas: new FormControl(null)
    });

    const currentDay = new Date();
    const nextDayNoon = new Date(currentDay.getFullYear(), currentDay.getMonth(), currentDay.getDate() + 1, 12);

    this.min = nextDayNoon;
  }


  onSubmit() {
    const formData = this.form.value;
    console.log(formData);
  }
  }
