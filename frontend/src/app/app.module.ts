import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './myComponents/login/login.component';
import { TodoHeaderComponent } from './myComponents/todo/todo-header/todo-header.component';
import { TodoAddComponent } from './myComponents/todo/todo-add/todo-add.component';
import { TodoInProgressComponent } from './myComponents/todo/todo-in-progress/todo-in-progress.component';
import { TodoCompletedComponent } from './myComponents/todo/todo-completed/todo-completed.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { RegisterPageComponent } from './myComponents/register-page/register-page.component';
import { BackBtnComponent } from './myComponents/back-btn/back-btn.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { DragDropModule} from '@angular/cdk/drag-drop';
import { TodoModalComponent } from './myComponents/todo/todo-modal/todo-modal.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';






@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TodoHeaderComponent,
    TodoAddComponent,
    TodoInProgressComponent,
    TodoCompletedComponent,
    RegisterPageComponent,
    BackBtnComponent,
    TodoModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    DragDropModule,
    NgxPaginationModule,
    FontAwesomeModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
