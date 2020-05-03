import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  // tslint:disable-next-line: max-line-length
  providedIn: 'root' // Vid24 Esta linea de codigo que se crea con el servicio nos ayuda a que los servicios funcionen de manera globar en la aplicacion y vamos a importar un modulo para que funcione la extranion de servicios en app.module
})
export class DataService {

  constructor( private http: HttpClient) { } // Vid24 Inyectamos el Httpp para hacer las peticiones

  getPost() { // Vid 24 Creamos un metodo para importar el servicio de la pag que nos dio.

    return this.http.get('https://jsonplaceholder.typicode.com/posts'); // Vid 24 Retornamos el contenido del JSON Vamos al post.component

  }
}
