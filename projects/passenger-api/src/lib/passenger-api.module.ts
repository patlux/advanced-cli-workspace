import { NgModule, ModuleWithProviders } from '@angular/core';
import { PassengerApiService } from './services/passenger-api.service';

@NgModule()
export class PassengerApiModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: PassengerApiModule,
      providers: [PassengerApiService],
    };
  }
}
