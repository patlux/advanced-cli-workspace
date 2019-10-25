import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Passenger } from '../models/passenger';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PassengerApiService {
  baseUrl: string = `http://www.angular.at/api`;

  constructor(private http: HttpClient) {}

  findAll(): Observable<Passenger[]> {
    return this.http.get<Passenger[]>(`${this.baseUrl}/passenger`);
  }
}
