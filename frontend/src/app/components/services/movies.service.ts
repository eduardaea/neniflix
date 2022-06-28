import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Observable } from 'rxjs/internal/Observable';
import { Movie } from '../movies-create/movie.model';



@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  baseUrl = 'http://localhost:3001/movies'

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }
  showMessage(msg: string): void{
    this.snackBar.open(msg,'X', {
      duration:3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }
    read(): Observable<Movie[]> {
      return this.http.get<Movie[]>(this.baseUrl)
    }
    create(movie: Movie): Observable<object>{
      return this.http.post(this.baseUrl, movie)
    }
    update(movie: Movie): Observable<Movie>{
      return this.http.put<Movie>(this.baseUrl+`/${movie.id}`,movie)
    }
    delete(movie:Movie): Observable<void>{
      return this.http.delete<void>(this.baseUrl+`/${movie.id}`)
    }
  }

