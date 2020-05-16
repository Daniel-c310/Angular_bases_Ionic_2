import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  // tslint:disable-next-line: max-line-length
  @Input() mensaje: any; /* VID 26 5 Importamos y declaramos un decorador para que este reciva al mensaje, este debe llmartse igual que la variable "mensaje" de post.component.html y vamos para alla  */
  @Output() clickPost = new EventEmitter<number>(); /* Colocamos el siguiente decorador e iportamos el EventEmitter */

  constructor() { }

  ngOnInit() {
  }

  // tslint:disable-next-line: max-line-length
  onClick() { /* VID 27 1 CREAMOS LA SIGUIENTE FUNCION Y LA COLOCAMOS EN EL POSTCOMPONENTE.HTML para que sea un evento que cuando demos clic nos muestre el id*/
    this.clickPost.emit( this.mensaje.id );
  }

}
