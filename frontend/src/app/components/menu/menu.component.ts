import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  ///LOS ICONOS QUE USAN SON DE MATERIAL ICON/// TAMBIEN SE PUEDE USAR FONT AWESOME
  appitems = [
    {
      label: 'Home',
      link: '/home',
      icon: 'home'
    },
    {
      label: 'Registrar Usuario',
      link: '/register',
      icon: 'create',
      ///CON HIDDEN SE OCULTA EL MENU
      hidden: true
    },
    // {
    //   label: 'Item 1',
    //   faIcon: 'fab fa-500px', //AQUI USO FONTAWESOME PARA ESO DEBO INSTALAR LA LIBRERIA
    //   items: [
    //     {
    //       label: 'Item 1.1',
    //       link: '/item-1-1',
    //       icon: 'favorite'
    //     },
    //     {
    //       label: 'Item 1.2',
    //       faIcon: 'fab fa-accessible-icon',
    //       items: [
    //         {
    //           label: 'Item 1.2.1',
    //           link: '/item-1-2-1',
    //           faIcon: 'fas fa-allergies'
    //         },
    //         {
    //           label: 'Item 1.2.2',
    //           faIcon: 'fas fa-ambulance',
    //           items: [
    //             {
    //               label: 'Item 1.2.2.1',
    //               link: 'item-1-2-2-1',
    //               faIcon: 'fas fa-anchor'
    //             }
    //           ]
    //         }
    //       ]
    //     }
    //   ]
    // },
  ];


  config = {
    paddingAtStart: true,
    // classname: 'my-custom-class',
    listBackgroundColor: 'white',
    fontColor: 'black',
    backgroundColor: 'white',
    selectedListFontColor: '#2776DF',
  };

  selectedItem(event) {
    // console.log(event);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
