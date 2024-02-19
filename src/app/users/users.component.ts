import { Component,OnInit } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit {
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
