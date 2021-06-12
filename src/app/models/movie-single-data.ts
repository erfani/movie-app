import { RatingTypeModel } from "./ratings-type-model"
export interface MovieSingleData {
  Title: string | undefined,
  Year: number,
  Rated: string,
  Released: string,
  Runtime: string,
  Genre: string,
  Director: string,
  Writer: string,
  Actors: string,
  Plot: string,
  Language: string,
  Country: string,
  Awards: string,
  Poster: string,
  Ratings: RatingTypeModel[],
  Metascore: string,
  imdbRating: string,
  imdbVotes: string,
  imdbID: string,
  Type: string,
  totalSeasons: string,
  Response: string
}
