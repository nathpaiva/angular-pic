import { Component } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { PhotoComponent } from '../photo/photo.component';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  moduleId: module.id,
  selector: 'app',
  templateUrl: './register.component.html'
})

export class RegisterComponent {

  photo: PhotoComponent = new PhotoComponent();
  http: Http;
  registerPhoto: FormGroup;


  constructor(http: Http, fb: FormBuilder) {
    // registerPhoto
    this.http = http;
    this.registerPhoto = fb.group({
      titulo: ['', Validators.compose(
        [Validators.required, Validators.minLength(4)]
      )],
      url: ['', Validators.required],
      descricao: [''],
    });
  }

  saveNewPhoto(e) {
    e.preventDefault();

    let headers = new Headers;
    headers.append('Content-Type', 'application/json');

    this.http.post('/v1/fotos', JSON.stringify(this.photo), { headers })
      .subscribe(() => {
        console.log('salvo com sucesso');
        this.photo = new PhotoComponent;
      }, err => console.log(err));

  }

}
