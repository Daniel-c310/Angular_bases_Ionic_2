import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  constructor( private dataservice: DataService ) { } // Vid24 Inyectamos el servicio que acabamos de hacer

  ngOnInit() { // V24 Este ngOnInit es lo que e carga cuando la pag es llamada por primera vez

    this.dataservice.getPost() // Vid24 mandamos a llamar a la funcion getpost y los imprimimos en consola FIN
    .subscribe( posts => {
      console.log(posts)
    });

  }

}
