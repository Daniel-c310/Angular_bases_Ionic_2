import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
// tslint:disable-next-line: max-line-length
import { AppRoutingModule } from './app-routing.module';
// tslint:disable-next-line: max-line-length
import { MenuComponent } from './components/menu/menu.component'; /*Rutasapp4 Verificar que se importo esta libreria para las rutas Ir a appcomponenthtml */
import { PagesModule } from './pages/pages.module';

@NgModule({
  declarations: [
    AppComponent,
    // AboutComponent,
    // ContactComponent,
    // HomeComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, /* RutasApp3 Aqui importamos la ruta que hab[iamos exportado de la pag que creamos, app-routing.module */
    // tslint:disable-next-line: max-line-length
    PagesModule // V 22.3 Aqui importamos la pag que creamos, iportamos todos los modulos, asi que hay que eliminar los demas FIN reamos careta Posts y dos modulos
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
