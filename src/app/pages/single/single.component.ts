import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieSingleData } from 'src/app/models/movie-single-data';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.scss']
})
export class SingleComponent implements OnInit {
  itemResponse : MovieSingleData | undefined;
  constructor(private route : ActivatedRoute, private api: ApiService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if (id !== null) {
      this.api.getById(id).subscribe(itemResponse => {
        this.itemResponse = itemResponse;
      })
    } else {
      alert('route not valid');
    }
  }

}
