import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'] // Corrected styleUrl to styleUrls
})
export class UsersComponent implements OnInit {
  posts: any;

  constructor(private service: PostService) {}

  ngOnInit(): void {
    this.fetchUsers();
  }

  fetchUsers(): void {
    this.service.getUsers().subscribe(
      (res) => {
        this.posts = res;
        console.log(this.posts);
      },
      (error) => {
        console.error('Error fetching users:', error);
      }
    );
  }
}
