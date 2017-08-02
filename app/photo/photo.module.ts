import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoComponent } from './photo.component';
import { FilterByTitle } from './photo.pipes';
import { PhotoService } from './photo.service';

@NgModule({
  imports: [ CommonModule ],
  declarations: [PhotoComponent, FilterByTitle],
  exports: [PhotoComponent, FilterByTitle],
  providers: [PhotoService]
})
export class PhotoModule { }
