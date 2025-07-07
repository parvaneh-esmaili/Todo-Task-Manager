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
      this.todo = data;
      console.log(this.todo);
    });
  }

  deleteNote(documentId: string) {
    this.todoService.deleteNote(documentId).subscribe(() => {
      this.todo = this.todo.filter((todo) => todo.documentId !== documentId);
    });
  }
}
