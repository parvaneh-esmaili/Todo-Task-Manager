import { Component, inject, OnInit } from '@angular/core';
import { TodoService } from '../../../../_services/todo.service';
import { TodoForSaveModel, TodoForListModel } from '../../../../_models/todo.model';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add',
  imports: [FormsModule],
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent implements OnInit {
  newTodo: TodoForSaveModel = new TodoForSaveModel(); 
  todos: TodoForListModel[] = []; 

  private todoService: TodoService = inject(TodoService);
  private router = inject(Router);

  constructor() {}

  ngOnInit() {
    this.todoService.getNotes().subscribe((notes) => {
      this.todos = notes;
    });
  }

  saveTodo() {

    this.todoService.addNote(this.newTodo).subscribe(
      (addedTodo) => {
        this.todos.push(addedTodo); 
        this.newTodo = new TodoForSaveModel(); 
        this.router.navigate(['/list']); 
      },
    );
  }
}
