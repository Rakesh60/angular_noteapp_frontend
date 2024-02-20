import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../services/post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-form',
  templateUrl: './update-form.component.html',
  styleUrls: ['./update-form.component.css']
})
export class UpdateFormComponent implements OnInit {
  formData: any = { title: '', content: '' };

  constructor(
    private route: ActivatedRoute,
    private noteData: PostService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const noteId = this.route.snapshot.paramMap.get('id');

    if (noteId) {
      this.noteData.getNoteById(noteId).subscribe((note: any) => {
        // Merge the response data into formData
        this.formData = { ...this.formData, ...note };
      });
    }
  }

  onSubmit(): void {
    const noteId = this.route.snapshot.paramMap.get('id');
    this.noteData.updateNote(noteId, this.formData).subscribe(() => {
      // Handle successful update
      console.log('Form submitted successfully');
      // Clear the form input fields
      this.router.navigate(['/notes']).then(() => {
        console.log('Navigated to /notes');
      }).catch(error => {
        console.error('Error navigating to /notes:', error);
      });
    }, (error) => {
      // Handle error
      console.error('Error updating note:', error);
    });
  }

}
