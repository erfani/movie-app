import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-quantity',
  templateUrl: './quantity.component.html',
  styleUrls: ['./quantity.component.scss']
})
export class QuantityComponent implements OnInit {
  erf: BehaviorSubject<number> = new BehaviorSubject<number>(10);
  constructor() { }

  ngOnInit(): void {
  }

  doPlus(){
    let current = this.erf.getValue();
    current++;
    this.erf.next(current);
  }
  doMinus(){
    let current = this.erf.getValue();
    current--;
    this.erf.next(current);
  }
}
