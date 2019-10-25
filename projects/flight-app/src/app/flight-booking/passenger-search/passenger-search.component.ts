import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import {
  Passenger,
  PassengerApiService,
} from 'projects/passenger-api/src/public-api';

@Component({
  selector: 'app-passenger-search',
  templateUrl: './passenger-search.component.html',
  styleUrls: ['./passenger-search.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class PassengerSearchComponent implements OnInit {
  passengers$: Observable<Passenger[]>;

  constructor(private passengerApi: PassengerApiService) {}

  ngOnInit() {
    this.passengers$ = this.passengerApi.findAll();
  }
}
