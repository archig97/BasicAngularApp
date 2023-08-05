import { Component } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {
  localItem : string | any;
  todos : Todo[];
  constructor(){
   this.localItem = localStorage.getItem("todos");
    if(this.localItem==null)
      this.todos = [];
    else{
      this.todos=JSON.parse(this.localItem);
    }
    

  }

  //this is the output of the emitter we started in todo-item.component.ts

  todoDelete(todo : Todo){
    console.log(todo);
    this.todos.splice(this.todos.indexOf(todo), 1);//index and how many to delete
    localStorage.setItem("todos",JSON.stringify(this.todos));
  }

  todoAdd(todo : Todo){
    console.log(todo);
    this.todos.push(todo);
    localStorage.setItem("todos",JSON.stringify(this.todos));
  }
  todoToggle(todo : Todo){
    console.log(todo);
   const index = this.todos.indexOf(todo);
   this.todos[index].active=!this.todos[index].active;
    localStorage.setItem("todos",JSON.stringify(this.todos));
  }

}
