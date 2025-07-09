import { Component, OnInit } from '@angular/core';
import { TodoForListModel } from '../../../../_models/todo.model';
import { TodoService } from '../../../../_services/todo.service';
import { CommonModule, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [NgFor, FormsModule, CommonModule, RouterLink],
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  todo: TodoForListModel[] = [];
  today: Date = new Date();

  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.todoService.getNotes().subscribe((data) => {
      const userId = localStorage.getItem('userID');
      data.forEach((todo) => {
        if (todo.todos[0].id.toString() == userId) {
          this.todo.push(todo);
        }
      });
    });
  }

  deleteNote(documentId: string) {
    this.todoService.deleteNote(documentId).subscribe(() => {
      this.todo = this.todo.filter((todo) => todo.documentId !== documentId);
    });
  }
}
