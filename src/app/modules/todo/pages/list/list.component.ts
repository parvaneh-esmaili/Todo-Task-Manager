import { Component, OnInit } from '@angular/core';
import { TodoForListModel } from '../../../../_models/todo.model';
import { TodoService } from '../../../../_services/todo.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  todos: TodoForListModel[] = [];
  selectId: number | null = null;
  today: Date = new Date();

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.getNotes();
  }

  getNotes(): void {
    this.todoService.getNotes().subscribe((data: TodoForListModel[]) => {
      this.todos = data;
    });
  }

  deleteNote(id: number): void {
    this.todoService.deleteNote(id).subscribe(() => {
      const index = this.todos.findIndex(x => x.todo.id === id);
       this.todos.splice(index, 1);
    });
  }
}
