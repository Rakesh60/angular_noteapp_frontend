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
    this.loadFormData();
  }

  async loadFormData(): Promise<void> {
    const noteId = this.route.snapshot.paramMap.get('id');

    if (noteId) {
      try {
        const note: any = await this.noteData.getNoteById(noteId).toPromise();
        // Merge the response data into formData
        this.formData = { ...this.formData, ...note };
      } catch (error) {
        console.error('Error fetching note:', error);
      }
    }
  }

  async onSubmit(): Promise<void> {
    try {
      const noteId = this.route.snapshot.paramMap.get('id');

      await this.noteData.updateNote(noteId, this.formData).toPromise();

      // Handle successful update
      console.log('Form submitted successfully');

      await this.router.navigate(['/notes']);
      this.updateAlert(this.formData.title);
      console.log('Navigated to /notes');
    } catch (error) {
      // Handle error
      console.error('Error updating note:', error);
    }
  }

  updateAlert(msg: any): void {
    const node = document.createElement("p");
    const m = document.getElementById('alert');
    if (m != null) {
      m.style.display = 'block';
      m.className = 'alert alert-success alert-dismissible fade show ';
      m.appendChild(node).textContent = msg.toUpperCase() + " Updated Successfully";
      setTimeout(() => {
        m.appendChild(node).textContent = "";
        m.style.display = 'none';
      }, 2000);
    }
  }

}
