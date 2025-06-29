import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TodoForListModel, TodoForSaveModel } from '../_models/todo.model';

@Injectable({
  providedIn: 'root'
})

export class TodoService {
  getTodos() {
    throw new Error('Method not implemented.');
  }
  private apiUrl = ''

  constructor( private http: HttpClient) { }

  getNotes(): Observable<TodoForListModel[]>{
    return this.http.get<TodoForListModel[]>(this.apiUrl);
  };

  addNotes(newNote: TodoForSaveModel): Observable<TodoForListModel> {
    return this.http.post<TodoForSaveModel> (this.apiUrl,newNote);
  }

  deleteNote(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
