import { Component } from '@angular/core';
import { PhotoComponent } from '../photo/photo.component';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PhotoService } from '../photo/photo.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app',
  templateUrl: './register.component.html'
})

export class RegisterComponent {

  photo: PhotoComponent = new PhotoComponent();
  registerPhoto: FormGroup;
  service: PhotoService;
  route: ActivatedRoute;
  router: Router;
  message: string = '';
  id: string = '';


  constructor(fb: FormBuilder, service: PhotoService, route: ActivatedRoute, router: Router) {
    this.service = service;
    this.router = router;

    route.params.subscribe(params => {
      this.id = params['id'];

      if(!!!this.id) return

      this.service.editPhoto(this.id)
        .subscribe(
          photo => this.photo = photo,
          error => console.log(error));
    })

    // registerPhoto
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
    this.service.register(this.photo)
      .subscribe((res) => {
        this.photo = new PhotoComponent;
        this.message = res.showMessage;
        
        if (!res.isInclusion) this.router.navigate(['']);
      }, err => console.log(err));
  }



}
