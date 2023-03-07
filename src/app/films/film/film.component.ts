import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FilmService } from 'src/app/shared/film.service';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styles: [
  ]
})
export class FilmComponent {

  film:any;
  filmId:any;
  constructor(private activatedRoute:ActivatedRoute, private filmService:FilmService, private router:Router){}

  ngOnInit(){
    this.filmId = this.activatedRoute.snapshot.paramMap.get('id');
    this.filmService.getFilmById(this.filmId).subscribe(res => 
      this.film = res);
  }

  onBackClick(){
    this.router.navigateByUrl('/films')
  }
}
