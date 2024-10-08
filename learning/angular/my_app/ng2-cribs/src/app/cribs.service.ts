import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CribsService {

  constructor(private http: HttpClient) {}
  getAllCribs() {
    return this.http.get('data/cribs.json')
  }

}
