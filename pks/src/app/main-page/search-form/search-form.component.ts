import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormGroup, NgForm, FormControl} from '@angular/forms';
import {Track} from './track.model';
import {SearchService} from '../../shared/search.service';


@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {
  @Output() track: EventEmitter<Track[]> = new EventEmitter<Track[]>();
  form: FormGroup;
  cityList: Array<string> = [];
  public min: Date;
  public max: Date = new Date(2000, 11, 31, 22);
  public format: any = 'dd/MM/yyyy';
  constructor(private searchService: SearchService) { }

  ngOnInit() {
    this.getUniqCityList();

    this.form = new FormGroup({
      leavingFrom: new FormControl(null),
      leavingTo: new FormControl(null),
      data: new FormControl(null),
      from: new FormControl(null),
      to: new FormControl(null),
      passengers: new FormControl(null)
    });

    const currentDay = new Date();
    const nextDayNoon = new Date(currentDay.getFullYear(), currentDay.getMonth(), currentDay.getDate() + 1, 12);

    this.min = nextDayNoon;
  }

  private getUniqCityList() {
    this.searchService.getTrackList().toPromise().then((tracks: Track[]) => {
      tracks.forEach((track) => this.cityList.push(track.leavingFrom, track.leavingTo));
      this.cityList = Array.from(new Set(this.cityList)) as any;
    });
  }


  onSubmit() {
    const formData: Track = this.form.value;
    console.log(formData);
    console.log(this.cityList);
    this.searchService.getTrack(formData).subscribe((track) => {
      this.track.emit(track);
      console.log('return', track);
    });
  }
  }
