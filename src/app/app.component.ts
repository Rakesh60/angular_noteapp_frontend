import { Component, OnInit } from '@angular/core';
import {PostService} from './services/post.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'noteapp';
  posts:any;
  constructor(private service:PostService){

  }
  ngOnInit(): void {
    this.service.getPosts().subscribe(res=>{
      this.posts=res;
      console.log(this.posts)
    })
  }
  
}
