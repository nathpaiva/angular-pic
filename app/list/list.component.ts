import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { PhotoComponent } from '../photo/photo.component';
import { PhotoService } from '../photo/photo.service';

@Component({
  moduleId: module.id,
  selector: 'app',
  templateUrl: './list.component.html'
})

export class ListComponent {

  photos: PhotoComponent[] = [];
  service: PhotoService;
  message: string = '';
  
  constructor(service: PhotoService) {
    this.service = service;
    
    this.service.list().subscribe(photos => this.photos = photos, error => console.error(error));
  }

  remove(photo){
    this.service.remove(photo).subscribe(() => {
      let newPhotos = this.photos.slice(0);
      let idx = newPhotos.indexOf(photo);
      newPhotos.splice(idx, 1);
      this.photos = newPhotos;
      this.message = 'Foto removida com sucesso';

    }, error => {
      console.error(error);
      this.message = 'Não foi possível remover a foto';
    });
  }
}
