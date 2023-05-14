import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private URL = 'https://restcountries.com/v3.1/'

  constructor(private http: HttpClient) { }

  getAll(): Observable<any>{
    return this.http.get(this.URL + 'all')
  }

  getByCountryName(name: String): Observable<any>{
    return this.http.get(this.URL +'name/' + name);
  }

  getByRegion(region: String): Observable<any>{
    return this.http.get(this.URL + 'region/' + region)
  }
}
