import { Movie } from './movie.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MoviesService } from '../services/movies.service';



@Component({
  selector: 'app-movies-create',
  templateUrl: './movies-create.component.html',
  styleUrls: ['./movies-create.component.scss']
})
export class MoviesComponent implements OnInit {
  movie: Movie = {
    img: '',
    title:'',
    genre:'' 
  }
  moviesArray: Movie[] = []
  showForm = false
  update = false

  constructor(private moviesService: MoviesService,
    private router: Router) { }

  ngOnInit(): void { 
    this.listMovies()
   }

  createMovie() :void {
    this.moviesService.create(this.movie).subscribe(()=>{
      this.moviesService.showMessage('Filme Adicionado')
      this.router.navigate(['/category'])
    })
  }
  listMovies(): void{
    this.moviesService.read().subscribe(movie=>{
      this.moviesArray = movie
      this.moviesArray.sort((a,b)=> a.title.localeCompare(b.title))
    })
  }
  edit(movie:Movie):void{
    this.showForm = true;
    this.movie.title = movie.title
    this.movie.genre = movie.genre
    this.movie.img = movie.img
    this.movie.id = movie.id
    this.update = true
  }
  updateMovie():void{
    this.moviesService.update(this.movie).subscribe(()=>{
      this.moviesService.showMessage('Filme Atualizado')
      this.router.navigate(['/category'])
    })
  }
  deleteMovie(movie:Movie):void{
    console.log("entrou")
    this.moviesService.delete(movie).subscribe(()=>{
      this.moviesService.showMessage('Filme Excluido')
      this.router.navigate(['/category'])
    })
  }
}

