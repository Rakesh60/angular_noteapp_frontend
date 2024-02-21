import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})

export class NotesComponent {
  data: any;
  showCardSection: boolean = false;

  constructor(private noteData: PostService, private router: Router) {
    this.noteData.getNotes().subscribe((res) => {
      this.data = res;

    });
  }

  toggleCardSection() {
    this.showCardSection = !this.showCardSection;
  }

  deleteNote(noteId: string) {

    this.noteData.deleteNote(noteId).subscribe(
      (res) => {
        alert('You are deleting a note')
        //console.log(res.message)
        this.deleteAlert(res.message)
        console.log('Note deleted successfully');
        // After deletion, you might want to update the notes list by fetching them again
        this.noteData.getNotes().subscribe((res) => {
          this.data = res;
          console.log(res)

        });
      },
      (error) => {
        console.error('Error deleting note:', error);
        // Handle error here
      }
    );
  }
  //Update
  updateNoteForm(note: any) {
    // Handle the logic to update the note form, e.g., set form data, navigate to update page, etc.
    // You can also directly call the update method here if you want to update the note in the same page.
    console.log('Update note:', note);
    this.router.navigate(['/notes/update', note]);

  }


  deleteAlert(msg: any) {
    const node = document.createElement("p");
    const m = document.getElementById('alert');
    if (m != null) {
      m.style.display = 'block';
      m.className = 'alert alert-danger alert-dismissible fade show '

      m.appendChild(node).textContent = msg
      setTimeout(() => {
        m.appendChild(node).textContent = ""
        m.style.display = 'none';
      }, 2000)
    }
  }

}
