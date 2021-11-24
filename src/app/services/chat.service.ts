import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private httpClient: HttpClient) { }

  reply(message: string): Observable<Object> {
    return this.httpClient.post( environment.baseChartUrl + '/message', { message: message });
  }
}
