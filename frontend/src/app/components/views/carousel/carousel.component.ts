import { Movie } from './../../movies-create/movie.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  @Input() filmes : Movie[] = [];

  constructor() { }

  filmesArray: object[] = []

  ngOnInit(): void {
    for(let filme of this.filmes ){
      let objeto = {
        image: filme.img,
        title: filme.title,
        thumbImage: filme.img,
        alt: filme.title + '.img',
      }
      this.filmesArray.push(objeto)
    }  
  }
}
