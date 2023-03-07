import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilmsComponent } from './films/films.component';
import { FilmComponent } from './films/film/film.component';
import { CreateComponent } from './films/create/create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './user/login/login.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { CommentsComponent } from './comments/comments.component';

@NgModule({
  declarations: [
    AppComponent,
    FilmsComponent,
    FilmComponent,
    CreateComponent,
    UserComponent,
    LoginComponent,
    RegistrationComponent,
    CommentsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FormsModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
