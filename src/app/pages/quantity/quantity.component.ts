import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-quantity',
  templateUrl: './quantity.component.html',
  styleUrls: ['./quantity.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuantityComponent implements  OnDestroy {
  private erf$: BehaviorSubject<number> = new BehaviorSubject<number>(10);
  erfObservable$ = this.erf$.asObservable();

  constructor() { }

  ngOnDestroy(): void {
    this.erf$.complete();
  }

    doPlus(){
    this.erf$.next(this.erf$.getValue()+1);
  }
  doMinus(){
    this.erf$.next(this.erf$.getValue()-1);
  }

}
