import { Component, OnInit } from '@angular/core';
import { AirportService } from '@flight-workspace/flight-api';
import { Observable } from 'rxjs';

@Component({
  selector: 'airport-search',
  templateUrl: './airport-search.component.html',
})
export class AirportSearchComponent implements OnInit {
  airports$: Observable<string[]>;

  constructor(private airportService: AirportService) {}

  ngOnInit() {
    this.airports$ = this.airportService.findAll();
  }
}
