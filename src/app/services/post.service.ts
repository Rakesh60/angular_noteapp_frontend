import { Injectable, SimpleChanges } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DoCheck } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService implements DoCheck {
  private url = 'http://localhost:8080/';
 ngDoCheck(): void {
   this.getNotes()
 }
  constructor(private httpClient: HttpClient) { }

  getUsers(): Observable<any> {
    return this.httpClient.get(`${this.url}users`);
  }

  getNotes(): Observable<any> {
    // Return the observable directly here
    return this.httpClient.get(`${this.url}notes`);
  }
  sendData(formData: any): Observable<any> {
    return this.httpClient.post(`${this.url}notes`, formData);
  }
}
