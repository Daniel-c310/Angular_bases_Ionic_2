import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// tslint:disable-next-line: max-line-length
import { tap } from 'rxjs/Operators'; /* VID 25 7 Importamos el tap, con el objetivo de ver que data trae desde el servicio e imprimirlo en la consola, abajo la usamos */

@Injectable({
  // tslint:disable-next-line: max-line-length
  providedIn: 'root' // Vid24 Esta linea de codigo que se crea con el servicio nos ayuda a que los servicios funcionen de manera globar en la aplicacion y vamos a importar un modulo para que funcione la extranion de servicios en app.module
})
export class DataService {

  constructor( private http: HttpClient) { } // Vid24 Inyectamos el Httpp para hacer las peticiones

  getPost() { // Vid 24 Creamos un metodo para importar el servicio de la pag que nos dio.

    return this.http.get('https://jsonplaceholder.typicode.com/posts')// Vid 24 Retornamos el contenido del JSON Vamos al post.component
    // tslint:disable-next-line: max-line-length
    .pipe( tap( console.log ) ); /*  FIN VID 25 8 Se le agrega esta linea con el objetivo de que se puedan ver lo que se esta trayendo de la data, solo es para impimir en consola y ver, pero es necesario importar la libreria VID 26 Imputs creamos un nuevo coponente que se llame Post y vamos a postscomponent.html*/

  }
}
