import { Component, linkedSignal, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoComponent } from './todo.component';
import { ListComponent } from './pages/list/list.component';
import { AddComponent } from './pages/add/add.component';

const routes: Routes = [
  {path:'', component: TodoComponent, children:[ 
    {path: '', component: ListComponent, pathMatch:'full'},
    {path: 'list', component: ListComponent},
    {path: 'add', component: AddComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodoRoutingModule { }
