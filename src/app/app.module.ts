import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { UsersComponent } from './users/users.component';
import { UserformComponent } from './userform/userform.component';
import { NotesComponent } from './notes/notes.component';
import { NotesFormComponent } from './notes-form/notes-form.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { UpdateFormComponent } from './update-form/update-form.component';

const routes: Routes = [
  { path: 'users', component: UsersComponent },
  { path: 'userform', component: UserformComponent },
  { path: 'notes', component: NotesComponent },
  { path: 'notesform', component: NotesFormComponent },
  // { path: '', redirectTo: '/users', pathMatch: 'full' }, // Default route
  { path: '', redirectTo: '/notes', pathMatch: 'full' }, // Default route
  { path: 'notes/update/:id', component: UpdateFormComponent }
];



@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserformComponent,
    NotesComponent,
    NotesFormComponent,
    UpdateFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  exports: [NotesFormComponent], // Exporting NotesFormComponent
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
