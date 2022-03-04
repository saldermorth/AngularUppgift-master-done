import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SkidItem } from 'src/app/entities/skid-paket';

@Injectable({
  providedIn: 'root',
})
export class HttpGetProductsService {
  private apiUrl =
    'https://www-th-frontend.azurewebsites.net/api/exam/v1/skiequipment';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Array<SkidItem>> {
    return this.http.get<Array<SkidItem>>(this.apiUrl);
  }
}
