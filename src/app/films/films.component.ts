import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FilmService } from '../shared/film.service';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styles: [
  ]
})
export class FilmsComponent {

  films:any = [];
  constructor(private service:FilmService, private router:Router){}

  ngOnInit() {
    this.service.getFilms().subscribe(
      res => {
        this.films = res;
        console.log(res);
        
      },
      err => {
        console.log(err);
      },
    );
  }


  onLogout() {
    localStorage.removeItem('token');
    this.router.navigate(['/user/login']);
  }
}
