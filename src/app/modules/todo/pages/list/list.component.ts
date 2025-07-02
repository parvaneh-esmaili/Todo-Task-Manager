import { Component, OnInit } from '@angular/core';
import { TodoForListModel } from '../../../../_models/todo.model';
import { TodoService } from '../../../../_services/todo.service';
import { CommonModule, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-list',
  standalone: true,
  imports: [NgFor, FormsModule, CommonModule],
  templateUrl:  './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  todos: TodoForListModel[] = [];
  selectedId: number | null = null;
  today: Date = new Date();

  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.todoService.getNotes().subscribe(data => {
      this.todos = data; 
    });
  }

  deleteNote(id: number) {
  console.log('Deleting ID:', id); 
  this.todoService.deleteNote(id).subscribe(() => {
    this.todos = this.todos.filter(todo => todo.id !== id);
  });
}
}
