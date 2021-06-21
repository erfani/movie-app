import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { MovieSingleData } from "./models/movie-single-data";
import { SearchResponseModel } from "./models/search-response";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'http://www.omdbapi.com/?apikey=c2a192a3';

  constructor(private http: HttpClient) {}

  public search(search: string): Observable<SearchResponseModel> {
    return this.http.get<SearchResponseModel>(this.baseUrl + '&s=' + search);
  }

  public getById(id: string): Observable<MovieSingleData> {
    return this.http.get<MovieSingleData>(this.baseUrl + '&i=' + id);
  }
}
