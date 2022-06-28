import { Movie } from "../movies-create/movie.model"

export interface Genre {
    name: string
    filmes: Movie[]
}
