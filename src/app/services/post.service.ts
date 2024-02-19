import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private url='http://localhost:8080/users';
  constructor(private httpClient:HttpClient) { }
  getPosts(){
    return this.httpClient.get(this.url)
  }
  getNotes(){
    
    return this.httpClient.get('http://localhost:8080/products')
  }
 
}
