import { Component } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-notes-form',
  templateUrl: './notes-form.component.html',
  styleUrls: ['./notes-form.component.css']
})
export class NotesFormComponent {

  formData: any = {
    title: '',
    content: '',

  };

  constructor(private postService: PostService) { }

  onSubmit(): void {
    this.postService.sendData(this.formData)
      .subscribe(
        (response) => {
          console.log('Data sent successfully:', response);
          alert(response.title)
          this.formData = {
            title: '',
            content: '',

          }
          // Optionally, reset the form
          // this.resetForm();
        },
        (error) => {
          console.error('Error sending data:', error);
        }
      );
  }

}

//
