import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/views/footer/footer.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { HeaderComponent } from './components/views/header/header.component';
import { HomeComponent } from './components/views/home/home.component';

import { NgImageSliderModule } from 'ng-image-slider';
import { MoviesComponent } from './components/movies-create/movies-create.component';
import {MatButtonModule} from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule} from '@angular/common/http';
import { CarouselComponent } from './components/views/carousel/carousel.component';
import { GenreComponent } from './components/views/genre/genre.component';
import { CategoryComponent } from './components/views/category/category.component';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    MoviesComponent,
    CarouselComponent,
    GenreComponent,
    CategoryComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    NgImageSliderModule,
    MatSnackBarModule,
    MatButtonModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
  

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
