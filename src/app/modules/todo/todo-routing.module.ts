import { Component, linkedSignal, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoComponent } from './todo.component';
import { ListComponent } from './pages/list/list.component';
import { AddComponent } from './pages/add/add.component';
import { EditComponent } from './pages/edit/edit.component';

const routes: Routes = [
  {path:'', component: TodoComponent, children:[ 
    {path: '', redirectTo: 'list', pathMatch:'full'},
    {path: 'list', component: ListComponent},
    {path: 'add', component: AddComponent},
    {path: 'edit/:documentId', component: EditComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodoRoutingModule { }
