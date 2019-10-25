import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { Flight } from '../models/flight';

@Injectable()
export class AirportService {
  flights: Flight[] = [];
  baseUrl: string = `http://www.angular.at/api`;
  reqDelay = 1000;

  constructor(private http: HttpClient) {}

  findAll(): Observable<string[]> {
    return this.http.get<string[]>(`${this.baseUrl}/airport`);
  }
}
