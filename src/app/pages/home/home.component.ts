import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { SearchResponseModel } from 'src/app/models/search-response';
import {SearchResultItemModel} from "../../models/search-result-item";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  movieName: string = '';
  response : SearchResponseModel | undefined;
  movieItem : SearchResultItemModel[] | undefined;
  constructor(private http: HttpClient) {

  }

  ngOnInit(): void {
  }

  search () {
    this.http.get<SearchResponseModel>('http://www.omdbapi.com/?apikey=c2a192a3&s=' + this.movieName).subscribe(
      (response) => {
        this.response = response;
        this.movieItem = response.Search;
        console.log (this.movieItem)
      }
    )
  }

}
