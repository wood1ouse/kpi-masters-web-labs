import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { TodoItem } from '../models/todo';

@Directive({
  selector: '[appTodoHighlight]'
})
export class TodoHighlightDirective implements OnInit {
  @Input() appTodoHighlight: TodoItem;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.el.nativeElement.innerHTML += `<span>${this.appTodoHighlight.content}</span> <span style="font-size: smaller; color: grey"> (${this.formatDate(this.appTodoHighlight.timestamp)})</span>`;
  }

  private formatDate(date: Date): string {
    return new Date(date).toLocaleDateString();
  }
}
