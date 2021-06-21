import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { MovieSingleData } from 'src/app/models/movie-single-data';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SingleComponent implements OnInit {
  itemResponse$ : Observable<MovieSingleData> | undefined;

  constructor(private route : ActivatedRoute, private api: ApiService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if (id !== null) {
      this.itemResponse$ = this.api.getById(id);
    } else {
      alert('route not valid');
    }
  }

}
