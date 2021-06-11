import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingleComponent } from "./single.component";



@NgModule({
  declarations: [
    SingleComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SingleComponent,
  ]
})
export class SingleModule { }
