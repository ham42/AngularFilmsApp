import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FilmService } from '../shared/film.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styles: [
  ]
})
export class CommentsComponent {

  filmId:any;
  comments:any = [];
  remarks:string = '';
  constructor(private activatedRoute:ActivatedRoute, private filmService:FilmService, private toastr:ToastrService, private router:Router){}

  ngOnInit(){
    this.filmId = this.activatedRoute.snapshot.paramMap.get('id');
    this.filmService.getComments(this.filmId)
    .subscribe(res => 
      {
        this.comments = res;
      });
  }

  onClick(){
    if(this.remarks.length > 0){
      const body = {
        remarks: this.remarks,
        filmId: this.filmId
      }

      this.filmService.postComment(body).subscribe(res => {
        this.toastr.success('Comment Posted', 'Success');
        this.router.navigateByUrl('/films/'+this.filmId);
        this.remarks = '';
      })
    }
      
  }
}
