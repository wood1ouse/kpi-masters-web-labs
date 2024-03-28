import { Component, Input } from '@angular/core';
import { TodoItem } from './models/todo';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  todoSearch = ''

  todoItems: TodoItem[] = [
    {
      content: 'Todo 1',
      timestamp: new Date(30, 5, 2002)
    },
    {
      content: 'Todo 2',
      timestamp: new Date(15, 3, 2002)
    }
  ]

  filteredTodoItems = this.todoItems;

  todoForm = new FormGroup({
    newTodoContent: new FormControl('', Validators.required),
  });

  onTodoAdd() {
    this.todoForm.controls.newTodoContent.markAsTouched()

    this.todoItems = [...this.todoItems, { content: this.todoForm.value.newTodoContent || '', timestamp: new Date() }]
    this.todoForm.patchValue({
      newTodoContent: ''
    })
    this.onFilterChange()
  }

  onFilterChange() {
    this.filteredTodoItems = this.todoItems.filter(item => item.content.includes(this.todoSearch))
  }
}
