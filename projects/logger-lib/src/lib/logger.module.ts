import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogMonitorComponent } from './log-monitor.component';
import { LoggerConfig } from './logger.config';
import { LoggerService } from './logger.service';
import { LogFormatterService } from './log-formatter.service';
import { DefaultLogFormatterService } from './default-log-formatter.service';

// imports: [ LoggerModule.forRoot({ ... }) ]

const defaultFormatterConfig = [
  {
    provide: LogFormatterService,
    useClass: DefaultLogFormatterService,
  },
];

@NgModule({
  imports: [CommonModule],
  declarations: [LogMonitorComponent],
  // providers: [
  //   LoggerService
  // ],
  exports: [LogMonitorComponent],
})
export class LoggerModule {
  // Setup
  static forRoot(config: LoggerConfig): ModuleWithProviders {
    return {
      ngModule: LoggerModule,
      providers: [
        { provide: LoggerConfig, useValue: config },
        ...(config.logFormatterService
          ? [
              {
                provide: LogFormatterService,
                useClass: config.logFormatterService,
              },
            ]
          : defaultFormatterConfig),
      ],
    };
  }
}
