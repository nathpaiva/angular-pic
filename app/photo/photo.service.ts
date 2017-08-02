import { Http, Headers, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'; 
import { PhotoComponent } from './photo.component';


@Injectable()
export class PhotoService {

  http: Http;
  headers: Headers;
  url: string = '/v1/fotos';

  constructor(http: Http) {
    this.http = http;
    this.headers = new Headers();
    this.headers.append('content-type', 'application/json');
  }

  list(): Observable<PhotoComponent[]>{
    return this.http.get(this.url)
      .map(res => res.json());
  }

  register(photo: PhotoComponent): Observable<Message>{
    if (photo._id) {
      return this.http.put(`${this.url}/${photo._id}`, JSON.stringify(photo), { headers: this.headers })
        .map(() =>(new Message('Alteração feita com sucesso', false)));
    } else{
      return this.http.post(this.url, JSON.stringify(photo), { headers: this.headers })
        .map(() =>(new Message('Foto adicionada com sucesso', false)));
    }
  }

  remove(photo: PhotoComponent){
    return this.http.delete(`${this.url}/${photo._id}`);
  }

  editPhoto(id: string): Observable<PhotoComponent>{
    return this.http.get(`${this.url}/${id}`)
      .map(res => res.json());
  }
}


export class Message {

  constructor(private _message: string, private _inclusion: boolean) {
    this._message = _message;
    this._inclusion = _inclusion;
  }

  public get showMessage() : string {
    return this._message;
  }


  public get isInclusion() : boolean {
    return this._inclusion;
  }
  
}
