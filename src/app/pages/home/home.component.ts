import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SearchResponseModel } from 'src/app/models/search-response';

import { ApiService } from '../../api.service';
import {SearchResultItemModel} from "../../models/search-result-item";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  movieName: string = '';
  response : SearchResponseModel | undefined;
  constructor(private api: ApiService, private router:Router, private route: ActivatedRoute) {}

 ngOnInit() :void{

   const movieName = this.route.snapshot.queryParamMap.get('name')
   if (movieName!== null) {
    this.search(movieName)
   }

 }
  onClickSearch () {
    if(this.response !== null) {
      this.search(this.movieName)
    }
    else {
      alert('not found')
    }
  }

  search(movieName: string){
    this.api.search(movieName).subscribe(response => {
      this.response = response;
      this.router.navigate(
        ['/search'],
        {
          relativeTo: this.route,
          queryParams: {name: movieName},
          queryParamsHandling: 'merge', // remove to replace all query params by provided
        });
    })
  }

}
