import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatbotService {
  private apiUrl = 'http://your-api-url/';

  constructor(private http: HttpClient) { }

  sendMessage(message: string): Observable<any> {
    // Assuming your API expects messages in a certain format
    const requestBody = { message: message };
    return this.http.post<any>(this.apiUrl + 'ask', requestBody);
  }
}