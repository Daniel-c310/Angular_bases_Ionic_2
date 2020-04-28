import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

//ESTA PAG SE CREO SOLAMENTE PARA LAS PAGINAS Y QUE ESTEN ACA

@NgModule({
  declarations: [ // V22.1 Colocamos los componentes, estos son los de la pag appmodule que se pongan aca
      HomeComponent,
      AboutComponent,
      ContactComponent
  ],

  exports: [ // V22.2 Creamos el metodo export para exportar los cmponentes de arribahacia la pag app.module.ts y vamos hacia alla
    HomeComponent,
    AboutComponent,
    ContactComponent
  ],

  imports: [
    CommonModule
  ]
})
export class PagesModule { }
