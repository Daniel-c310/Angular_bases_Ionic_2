import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  // AppRutas2 Creamos un arreglo de rutas para usarlo en menu.component.html con la diectiva ngFor FIN pages/pages.module.ts
  rutas = [
    {
      name: 'Home',
      path: '/home'
    },
    {
      name: 'About',
      path: '/about'
    },
    {
      name: 'Contact',
      path: '/contact'
    },
    {
      name: 'Posts',
      path: '/posts'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
