import { Component } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {

  todos : Todo[];
  constructor(){
    this.todos = [
      {
        srlNo : 1,
        title : "Cleaning",
        description : "Clean the cupboard",
        active : true

      },
      {
        srlNo : 2,
        title : "Workout",
        description : "Treadmill and strength training",
        active : true

      }
    ];

  }

}
