import { Component } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrl: './notes.component.css'
})

export class NotesComponent {
  data={};
  myData=[]
  constructor(private noteData:PostService){
    this.data=this.noteData;
  this.noteData.getNotes().subscribe((res)=>{
    this.data=res
  });
  };
  getAllNotes(){
    console.log(this.data)
    
  }
  

  
}
