import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';


const routes: Routes = [ /*Rutasapp1 Creamos el arrelode rutas que vamos a usar */
  {

    path: 'home',
    component: HomeComponent
},
{

  path: 'about',
  component: AboutComponent
},
{

  path: 'contact',
  component: ContactComponent
},
{

  path: 'posts',
  // tslint:disable-next-line: max-line-length
  loadChildren: './pages/posts/posts.module#PostsModule' // FF Vid 23 implementamos el LaisyLow en esta linea en lugar de redirectTo usamos el LoadChildren FF Vamos a Post.HTML
},
{

  path: '**',
  redirectTo: 'home'
}

];

@NgModule({
  declarations: [],
  imports: [
    /*El routerModule nos pide el arreglo de sistemas de rutas, por ejemplo en este caso por ser el pricipal es forRoote */
    RouterModule.forRoot( routes )
  ],
  exports: [
    RouterModule /*Rutasapp2 Exportamos este archivo de rutas a la pag app.module.ts */
    /*Exportar la configuraci[on para que se pueda leer y anglar reconozca este sistema de rutas*/
  ]
})
export class AppRoutingModule { }
