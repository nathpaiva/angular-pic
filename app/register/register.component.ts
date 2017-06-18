import { Component } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { PhotoComponent } from '../photo/photo.component';

@Component({
  moduleId: module.id,
  selector: 'app',
  templateUrl: './register.component.html'
})

export class RegisterComponent {

  photo: PhotoComponent = new PhotoComponent();
  http: Http;

  constructor(http: Http) {

    this.http = http;
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
