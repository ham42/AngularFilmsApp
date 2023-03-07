import { Component } from '@angular/core';
import { FilmService } from 'src/app/shared/film.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styles: [
  ]
})
export class CreateComponent {

  constructor(private filmService: FilmService, private router:Router, private toastr:ToastrService){}

  filmForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.maxLength(50)]),
    description: new FormControl('', [Validators.required, Validators.maxLength(100)]),
    releaseDate: new FormControl('', [Validators.required]),
    genre: new FormControl('', [Validators.required]),
    rating: new FormControl(null, [Validators.required, Validators.min(1), Validators.max(5)]),
    ticketPrice: new FormControl('', [Validators.required, Validators.min(1), Validators.pattern('[0-9]*')]),
    country: new FormControl('', [Validators.required]),
    imageFile: new FormControl('', [Validators.required]),
    imageSource: new FormControl('', [Validators.required]),
    
  });

  get get() {
    return this.filmForm.controls;
  }

  handleSubmit(){
    const formData = new FormData();
    formData.append('name', this.filmForm.get('name')!.value!);
    formData.append('description', this.filmForm.get('description')!.value!);
    formData.append('releaseDate', this.filmForm.get('releaseDate')!.value!);
    formData.append('genre', this.filmForm.get('genre')!.value!);
    formData.append('rating', this.filmForm.get('rating')!.value!);
    formData.append('ticketPrice', this.filmForm.get('ticketPrice')!.value!);
    formData.append('country', this.filmForm.get('country')!.value!);
    formData.append('imageFile', this.filmForm.get('imageSource')!.value!);


    console.log(formData);
    this.filmService.createFilm(formData).subscribe(
      (res) => {
          this.toastr.success('Created', 'New Film Successfully Added');
          this.filmForm.reset();
          this.router.navigateByUrl('/films');
      }
      );
  }

  onFileChange(event:any) {
    if(event.target.files.length > 0) {
      const file = event.target.files[0];

      this.filmForm.patchValue({
        imageSource: file
      });
    }
  }

}
