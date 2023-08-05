import { Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})

export class TodoITEMComponent implements OnInit{

  @Input() todo : Todo;
  @Output() deleteTodo : EventEmitter<Todo> = new EventEmitter();
  @Output() toggleTodo : EventEmitter<Todo> = new EventEmitter();

  constructor(){};

  onClick(todo : Todo){
    console.log("Click triggered");
    this.deleteTodo.emit(todo);
  }

  onCheckboxClick(todo : Todo){
    console.log("Job done");
    
    this.toggleTodo.emit(todo);
  }
  ngOnInit(): void{};
}

  
