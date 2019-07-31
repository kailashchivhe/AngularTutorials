import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { componentFactoryName } from '@angular/compiler';
import { TechnologiesComponent } from './technologies/technologies.component';
import { BooksComponent } from './books/books.component';
import { InvalidRouteComponent } from './invalid-route/invalid-route.component';

const routes: Routes = [
  {path:'',component:TechnologiesComponent},
  {path:'technologies',component:TechnologiesComponent},
  {path:'books',component:BooksComponent},
  {path:'**',component:InvalidRouteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
