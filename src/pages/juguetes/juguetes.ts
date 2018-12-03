import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { JugueteZorritoPage } from '../juguete-zorrito/juguete-zorrito';
import { VaritaConPeluchePage } from '../varita-con-peluche/varita-con-peluche';
import { JugueteDeRatoncitosPage } from '../juguete-de-ratoncitos/juguete-de-ratoncitos';
import { RatoncitosPage } from '../ratoncitos/ratoncitos';
import { TunelPage } from '../tunel/tunel';

@Component({
  selector: 'page-juguetes',
  templateUrl: 'juguetes.html'
})
export class JuguetesPage {

  constructor(public navCtrl: NavController) {
  }
  goToJugueteZorrito(params){
    if (!params) params = {};
    this.navCtrl.push(JugueteZorritoPage);
  }goToVaritaConPeluche(params){
    if (!params) params = {};
    this.navCtrl.push(VaritaConPeluchePage);
  }goToJugueteDeRatoncitos(params){
    if (!params) params = {};
    this.navCtrl.push(JugueteDeRatoncitosPage);
  }goToRatoncitos(params){
    if (!params) params = {};
    this.navCtrl.push(RatoncitosPage);
  }goToTunel(params){
    if (!params) params = {};
    this.navCtrl.push(TunelPage);
  }
}
