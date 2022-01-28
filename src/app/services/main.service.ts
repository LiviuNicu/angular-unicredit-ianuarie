import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MainService {
  private baseUrl = environment.baseUrl;

  private countryAB = new Subject<any>();
  public countryABObservable = this.countryAB.asObservable();

  private country = new Subject<any>();
  public countryObservable = this.country.asObservable();

  constructor(private http: HttpClient) {}

  updateCountryAB(selectedCountryAB: any) {
    this.countryAB.next(selectedCountryAB);
  }

  updateCountry(selectedCountryName: any) {
    this.country.next(selectedCountryName);
  }

  getCases(paramName: string, paramValue: string) {
    return this.http.get(`${this.baseUrl}/cases?${paramName}=${paramValue}`);
  }
  getVaccines(paramName: string, paramValue: string) {
    return this.http.get(`${this.baseUrl}/vaccines?${paramName}=${paramValue}`);
  }
}
