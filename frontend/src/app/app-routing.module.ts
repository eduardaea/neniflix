import { HomeComponent } from './components/views/home/home.component';
import { GenreComponent } from './components/views/genre/genre.component';
import { MoviesComponent } from './components/movies-create/movies-create.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './components/views/category/category.component';


const routes: Routes = [{
    path: "",
    component: HomeComponent 
},{
  path:"movies-create",
  component: MoviesComponent
},{
  path:"genre",
  component: GenreComponent
},{
  path:"category",
  component:CategoryComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
