import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import 'rxjs/add/operator/map';

import { AppComponent } from './app.component';

import { PhotoModule } from './photo/photo.module';
import { PanelModule } from './panel/panel.module';

import { ListComponent } from './list/list.component';
import { RegisterComponent } from './register/register.component';
import { routing } from './app.routes';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    PhotoModule,
    PanelModule,
    routing,
    FormsModule
  ],
  declarations: [AppComponent, ListComponent, RegisterComponent],
  bootstrap: [AppComponent]
})

export class AppModule { }
