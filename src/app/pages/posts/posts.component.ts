import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  // tslint:disable-next-line: max-line-length
  mensajes: any; // Vid 25 1 Creamos una variable cualquiera que va a ser un arreglo para almacenar los posts Vid 25. 5 quitamos la definici[on de arreglo]

  constructor( private dataservice: DataService ) { } // Vid24 Inyectamos el servicio que acabamos de hacer

  ngOnInit() { // V24 Este ngOnInit es lo que e carga cuando la pag es llamada por primera vezreebecasalazar20@gmail.com

    /* Vid 25 5 Este es el nuevo Codigo que se utiliza, destruye la sucripcion para ahorrar memoria ir a component.html*/
    this.mensajes = this.dataservice.getPost();

/*  ESTE CODIGO ES UNA MANERA DE HACERO, PERO DEJA UN SUSCRIPTOR QUE SE LLAME CADA VEZ, Y ESO QUITA MEMORIA */
//    this.dataservice.getPost() // Vid24 mandamos a llamar a la funcion getpost y los imprimimos en consola FIN nos quedamos aqui mismo
//    .subscribe( (posts: any[]) => { // Vid 25 setteamos la variable posts como un arreglo tabien
//    console.log(posts);
//    // tslint:disable-next-line: max-line-length
// tslint:disable-next-line: max-line-length
//    this.mensajes = posts; // Vid 25 3 igualamos la variable mensaje al arreglo posts para manipular la informacion, vamos a postcomponente.html
//    });

  }

}
