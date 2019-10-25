import { Component, OnInit } from '@angular/core';
import { LoggerService } from '@my/logger-lib';

@Component({
  selector: 'flight-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private loggerService: LoggerService) {}

  ngOnInit(): void {
    this.loggerService.debug("Hello, it's me DEBUG.");
    this.loggerService.log("Hello, it's me log.");
  }
}
