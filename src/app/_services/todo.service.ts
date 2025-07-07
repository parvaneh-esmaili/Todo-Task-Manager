import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { TodoForListModel, TodoForSaveModel } from '../_models/todo.model';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private apiUrl = 'http://localhost:1337/api/todos';

  constructor(private http: HttpClient) {}

  getNotes(): Observable<TodoForListModel[]> {
    return this.http
      .get<{ data: TodoForListModel[] }>(this.apiUrl)
      .pipe(map((response) => response.data || []));
  }

  addNote(newTodo: TodoForSaveModel): Observable<TodoForListModel> {
    console.log(newTodo);
    console.log(newTodo);
    return this.http
      .post<{ data: TodoForListModel }>(this.apiUrl, { data: newTodo })
      .pipe(map((response) => response.data));
  }

  deleteNote(documentId: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${documentId}`);
  }

  getNoteByDocumentId(
    documentId: string
  ): Observable<{ data: TodoForListModel }> {
    return this.http.get<{ data: TodoForListModel }>(
      `${this.apiUrl}/${documentId}`
    );
  }

  editNote(newTodo: TodoForListModel): Observable<any> {
    const todo = {
      title: newTodo.title,
      describe: newTodo.description,
    };
    return this.http
      .put<{ data: TodoForListModel }>(this.apiUrl + '/' + newTodo.id, {
        data: todo,
      })
      .pipe(map((response) => response.data));
  }
}
