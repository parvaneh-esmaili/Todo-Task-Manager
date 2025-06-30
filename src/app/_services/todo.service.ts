import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { TodoForListModel, TodoForSaveModel } from '../_models/todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private apiUrl = 'http://localhost:1337/api/todo-task-managers';  

  constructor(private http: HttpClient) { }
  getNotes(): Observable<TodoForListModel[]> {
    return this.http.get<{ data: TodoForListModel[] }>(this.apiUrl).pipe(
      map(response => response.data || [])  
    );
  }


  addNote(newTodo: TodoForSaveModel): Observable<TodoForListModel> {
  const payload = {
      data: {
        title: newTodo.title,
        description: newTodo.description
      }
    };

    return this.http.post<{ data: TodoForListModel }>(this.apiUrl, payload).pipe(
      map(response => response.data) 
    );
  }

  deleteNote(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
