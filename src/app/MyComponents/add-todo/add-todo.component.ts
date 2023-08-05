import { Component, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent {
  title:string;
  desc:string;
  @Output() submitTodo : EventEmitter<Todo> = new EventEmitter();

  onSubmit(){
    const todo ={
      srlNo:4,
      title:this.title,
      description:this.desc,
      active:true

    }
    this.submitTodo.emit(todo);
  }

}
