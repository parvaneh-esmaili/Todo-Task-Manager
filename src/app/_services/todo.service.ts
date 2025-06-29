import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TodoForListModel, TodoForSaveModel } from '../_models/todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private apiUrl = 'http://localhost:1337/api/todo-task-managers';

  constructor(private http: HttpClient) { }

  getNotes(): Observable<TodoForListModel[]> {
    return this.http.get<TodoForListModel[]>(this.apiUrl); 
  }

  addNote(newNote: TodoForSaveModel): Observable<TodoForListModel> {
    return this.http.post<TodoForListModel>(this.apiUrl, newNote);
  }

  deleteNote(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`); 
  }
}
