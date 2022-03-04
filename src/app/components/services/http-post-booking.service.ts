import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bokning } from 'src/app/entities/bokning';
import { Bokningscomfirm } from 'src/app/entities/bokningscomfirm';

@Injectable({
  providedIn: 'root',
})
export class BookingNotificationService {
  private apiUrl =
    'https://www-th-frontend.azurewebsites.net/api/exam/v1/booking';

  constructor(private http: HttpClient) {}

  SkickaBokning(notification: Bokning): // Mot Api
  Observable<Bokningscomfirm> {
    // från APi
    return this.http.post<Bokningscomfirm>(this.apiUrl, notification);
  }
}
