import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  // tslint:disable-next-line: max-line-length
  @Input() mensaje; /* VID 26 5 Importamos y declaramos un decorador para que este reciva al mensaje, este debe llmartse igual que la variable "mensaje" de post.component.html y vamos para alla  */

  constructor() { }

  ngOnInit() {
  }

}
