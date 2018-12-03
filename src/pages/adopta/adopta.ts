import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GraciasPage } from '../gracias/gracias';

@Component({
  selector: 'page-adopta',
  templateUrl: 'adopta.html'
})
export class AdoptaPage {

  constructor(public navCtrl: NavController) {
  }
  goToGracias(params){
    if (!params) params = {};
    this.navCtrl.push(GraciasPage);
  }
}
