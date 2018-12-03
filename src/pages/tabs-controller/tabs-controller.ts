import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InicioPage } from '../inicio/inicio';
import { CarritoPage } from '../carrito/carrito';
import { FavoritosPage } from '../favoritos/favoritos';

@Component({
  selector: 'page-tabs-controller',
  templateUrl: 'tabs-controller.html'
})
export class TabsControllerPage {

  tab1Root: any = InicioPage;
  tab2Root: any = CarritoPage;
  tab3Root: any = FavoritosPage;
  constructor(public navCtrl: NavController) {
  }
  
}
