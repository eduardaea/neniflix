import { MoviesService } from './../../services/movies.service';
import { Movie } from './../../movies-create/movie.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.scss']
})
export class GenreComponent implements OnInit {

  movies : Movie[] = []

  constructor(private moviesSevice: MoviesService) { }

  ngOnInit(): void {
    this.moviesSevice.read().subscribe(movies =>{
      this.movies = movies
    })
  }
}
