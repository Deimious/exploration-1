import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoComponent } from './components/todo/todo.component'
import { AboutComponent } from './pages/about/about.component' 

const routes: Routes = [
  { path: '', component: TodoComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]  
})
export class AppRoutingModule { }