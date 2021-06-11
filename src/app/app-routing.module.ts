import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {SingleComponent} from "./pages/single/single.component";

const routes: Routes = [
  { path:'', component: HomeComponent },
  { path: 'single', component: SingleComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
