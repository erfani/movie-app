import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {observable} from "rxjs";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  movieName: string = '';
  response : any;
  constructor(private http: HttpClient) {

  }

  ngOnInit(): void {
  }
  search () {
    this.http.get('http://www.omdbapi.com/?apikey=c2a192a3&s=' + this.movieName).subscribe(
      (response) => {
        this.response = response;
        console.log(response)
      }
    )
  }

}
