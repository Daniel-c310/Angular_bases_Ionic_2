import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostsComponent } from './posts.component';


const routes: Routes = [
  {
    path: '',
    component: PostsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)], // Indica que se está usando LaisyLow
  exports: [RouterModule]
})
export class PostsRoutingModule { }
