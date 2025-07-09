import { Component, Inject, OnInit } from '@angular/core';
import { TodoForListModel } from '../../../../_models/todo.model';
import { TodoService } from '../../../../_services/todo.service';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  imports: [FormsModule],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css',
})
export class EditComponent implements OnInit {
  todoForUpdate: TodoForListModel = new TodoForListModel(0, '', '', '', [
    {
      id: 0,
    },
  ]);
  documentId: string = '';

  constructor(
    private todoService: TodoService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.documentId = this.route.snapshot.paramMap.get('documentId')!;
    this.todoService.getNoteByDocumentId(this.documentId).subscribe((x) => {
      console.log(x.data);
      this.todoForUpdate = x.data;
    });
  }

  editTodo() {
    this.todoService.editNote(this.todoForUpdate).subscribe(() => {
      console.log('done');
      this.router.navigate(['/list']);
    });
  }
}
