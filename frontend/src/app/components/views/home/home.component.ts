import { Genre } from './../../models/genre.model';

import { Movie } from './../../movies-create/movie.model';
import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  movies : Movie[] = []
  genries :  Genre[] =[]
  
  constructor(private moviesSevice: MoviesService) { }

  ngOnInit(): void {
    this.moviesSevice.read().subscribe(movies => {
      this.movies = movies
      this.getGenre(movies)
      this.genries.sort((a,b)=> a.name.localeCompare(b.name))
    })
    
  }
  getGenre(movieArray:Movie[]): void {
    

    for(let movie of movieArray){
      let milu: Genre |  undefined;     
      for(let genre of this.genries){
        if(genre.name === movie.genre){
          milu = genre
          break;
        }
      }
      if(milu !== undefined){
        milu.filmes.push(movie)
      }
      else{
        milu = {
          name: movie.genre,
          filmes: [ movie ]
        }
        this.genries.push(milu)
      }
    }
  console.log(this.genries)
  }
}

