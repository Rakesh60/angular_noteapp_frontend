import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private products: any[] = []; // Specify the correct type here, or use 'any'
  private url = 'http://localhost:8080/users';

  constructor(private httpClient: HttpClient) { }

  getPosts(): Observable<any> {
    return this.httpClient.get(this.url);
  }

  getNotes(): Observable<any> {
    // Return the observable directly here
    return this.httpClient.get('http://localhost:8080/notes');
  }
}
