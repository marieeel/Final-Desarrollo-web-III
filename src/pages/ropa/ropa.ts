import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SueterRojoPage } from '../sueter-rojo/sueter-rojo';
import { SueterVerdePage } from '../sueter-verde/sueter-verde';
import { SueterBlancoPage } from '../sueter-blanco/sueter-blanco';
import { SueterColoresPage } from '../sueter-colores/sueter-colores';
import { SueterAzulPage } from '../sueter-azul/sueter-azul';

@Component({
  selector: 'page-ropa',
  templateUrl: 'ropa.html'
})
export class RopaPage {

  constructor(public navCtrl: NavController) {
  }
  goToSueterRojo(params){
    if (!params) params = {};
    this.navCtrl.push(SueterRojoPage);
  }goToSueterVerde(params){
    if (!params) params = {};
    this.navCtrl.push(SueterVerdePage);
  }goToSueterBlanco(params){
    if (!params) params = {};
    this.navCtrl.push(SueterBlancoPage);
  }goToSueterColores(params){
    if (!params) params = {};
    this.navCtrl.push(SueterColoresPage);
  }goToSueterAzul(params){
    if (!params) params = {};
    this.navCtrl.push(SueterAzulPage);
  }
}
