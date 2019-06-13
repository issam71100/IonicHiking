import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './pages/home/home.module#HomePageModule' },
  { path: 'new-hiking', loadChildren: './pages/new-hiking/new-hiking.module#NewItemPageModule' },
  { path: 'update-hiking/:id', loadChildren: './pages/update-hiking/update-hiking.module#UpdateItemPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
