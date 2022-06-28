import { MoviesService } from './../../services/movies.service';
import { Genre } from './../../models/genre.model';
import { Movie } from './../../movies-create/movie.model';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  movies: Movie[] = []
  genries : Genre[] = []
  showButtons = true
  moviesofgenre : Movie[] = []
  title : string = ""

  constructor(private moviesService: MoviesService) { }
 

  ngOnInit(): void {
    this.moviesService.read().subscribe(movies =>{
      this.movies = movies
      this.getGenre(movies)
    })
  }
  getGenre(movieArray: Movie[]): void {

    for(let movie of movieArray){
      let milu: Genre | undefined;
      for(let genre of this.genries){
        if(genre.name === movie.genre){
          milu = genre;
          break;
        }
      }
      if(milu !== undefined){
        milu.filmes.push(movie)
      }
      else{
        milu = {
        name: movie.genre,
        filmes:[ movie ]
        }
        this.genries.push(milu)
      }
    }  
  }
  showMoviesOfGenre(name: string){
    for(let names of this.genries){
      if(name=== names.name){
        this.showButtons = false
        this.moviesofgenre = names.filmes
        this.title = names.name
      }
    }
  }
  return(){
    this.showButtons=true
  }
}
