import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { FlightService } from './services/flight.service';
import { AirportService } from './services/airport.service';

@NgModule({
  imports: [CommonModule],
})
export class FlightApiModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: FlightApiModule,
      // FIXME: missing instruction in 01_libs_and_monorepo.html
      //        to add AirportService here
      providers: [FlightService, AirportService],
    };
  }
}
