import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodoModule } from './modules/todo/todo.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TodoHighlightDirective } from './directives/todo-highligh.directive';

@NgModule({
  declarations: [
    AppComponent,
    TodoHighlightDirective,
  ],
  imports: [
    BrowserModule,
    TodoModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
