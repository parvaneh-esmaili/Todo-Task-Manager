import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TodoService } from '../../../../_services/todo.service';
import { TodoForSaveModel } from '../../../../_models/todo.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  imports: [FormsModule],
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent {
  newTodo: TodoForSaveModel = new TodoForSaveModel();
  todos: TodoForSaveModel[] = [];
  
  private todoService: TodoService = inject(TodoService);
  private router = inject(Router);

  constructor() {
    this.todoService.getNotes().subscribe((notes) => {
      this.todos = notes;
    });
  }
  saveTodo() {
    this.todoService.addNote(this.newTodo).subscribe((x) => {
      this.todos.push(x);
      this.newTodo = new TodoForSaveModel();
      this.router.navigate(['/list']);
    });
  }
}
