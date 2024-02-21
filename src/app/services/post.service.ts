import { Injectable, SimpleChanges } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DoCheck } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
//http://192.168.1.106:4200/notes
export class PostService implements DoCheck {
  private url = 'http://192.168.1.106:8080/';
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
  deleteNote(noteId: string): Observable<any> {
    // Use the HTTP DELETE method to delete the note by its ID
    return this.httpClient.delete(`${this.url}notes/${noteId}`);
  }
  updateNote(noteId: any, formData: any): Observable<any> {
    // Use the HTTP PUT or PATCH method to update the note by its ID
    return this.httpClient.patch(`${this.url}notes/${noteId}`, formData);
    // or return this.httpClient.patch(`${this.url}notes/${noteId}`, formData);
  }
  getNoteById(noteId: string): Observable<any> {
    return this.httpClient.get(`${this.url}notes/${noteId}`);
  }
}
