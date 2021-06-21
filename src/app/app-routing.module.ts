import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactFormComponent } from './pages/contact-form/contact-form.component';
import {HomeComponent} from "./pages/home/home.component";
import { QuantityComponent } from './pages/quantity/quantity.component';
import {SingleComponent} from "./pages/single/single.component";

const routes: Routes = [
  {path: '', redirectTo: 'search', pathMatch: 'full'},
  { path:'search', component: HomeComponent },
  { path: 'movie/:id', component: SingleComponent },
  { path: 'quantity' , component: QuantityComponent},
  { path: 'contact', component: ContactFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
