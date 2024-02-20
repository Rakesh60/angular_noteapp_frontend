import { Component, SimpleChanges } from '@angular/core';
import { PostService } from '../services/post.service';
@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrl: './notes.component.css'
})

export class NotesComponent  {
  data: any;
  showCardSection:boolean=false;


  constructor(private noteData: PostService) {

    this.noteData.getNotes().subscribe((res) => {
      this.data = res
      console.log(this.data[0]._id)
    });
    
  };
 

  toggleCardSection() {
    this.showCardSection = !this.showCardSection;
  }

}
