import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  constructor(private http:HttpClient) { }
  readonly BaseURI = 'https://localhost:7169/api';

  getFilms(){
    return this.http.get(this.BaseURI + '/film');
  }

  getFilmById(id:any){
    return this.http.get(this.BaseURI + '/film/' + id);
  }

  createFilm(formData:FormData){
    return this.http.post<any>(this.BaseURI + '/film', formData);
  }

  getComments(id:any){
    return this.http.get(this.BaseURI + '/Comment/' + id);
  }

  postComment(comment:any){
    var tokenHeader = new HttpHeaders({'Authorization': 'Bearer '+ localStorage.getItem('token')})
    return this.http.post(this.BaseURI + '/Comment', comment, {headers:tokenHeader});
  }
}
