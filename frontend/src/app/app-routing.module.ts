import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { HomeScrenComponent } from './myComponents/home-scren/home-scren.component';
import { LoginComponent } from './myComponents/login/login.component';
import { RegisterPageComponent } from './myComponents/register-page/register-page.component';
import { TodoHeaderComponent } from './myComponents/todo/todo-header/todo-header.component';

const routes: Routes = [
  { path: '', component:HomeScrenComponent},
  { path: 'register', component:RegisterPageComponent},
  { path: 'login', component:LoginComponent},
  { path:  'todoList/:maildId',canActivate:[AuthGuard], component:TodoHeaderComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
