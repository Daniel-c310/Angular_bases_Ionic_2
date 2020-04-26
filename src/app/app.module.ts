import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
// tslint:disable-next-line: max-line-length
import { AppRoutingModule } from './app-routing.module'; /*Rutasapp4 Verificar que se importo esta libreria para las rutas Ir a appcomponenthtml */

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule /* RutasApp3 Aqui importamos la ruta que hab[iamos exportado de la pag que creamos, app-routing.module */
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
