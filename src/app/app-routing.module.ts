import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { CommentsComponent } from './comments/comments.component';
import { CreateComponent } from './films/create/create.component';
import { FilmComponent } from './films/film/film.component';
import { FilmsComponent } from './films/films.component';
import { LoginComponent } from './user/login/login.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {path:'', redirectTo:'/user/login', pathMatch:'full'},
  {path:'films', component: FilmsComponent, canActivate:[AuthGuard]},
  {path:'films/create', component:CreateComponent, canActivate:[AuthGuard]},
  {path:'films/:id', component:FilmComponent, canActivate:[AuthGuard]},
  {path:'films/comments/:id', component:CommentsComponent, canActivate:[AuthGuard]},
  {
    path:'user', component: UserComponent,
    children: [
      {path:'registration', component: RegistrationComponent},
      {path:'login', component: LoginComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
