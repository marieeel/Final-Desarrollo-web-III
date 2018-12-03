import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlimentoAvanzadoPage } from '../alimento-avanzado/alimento-avanzado';
import { AlimentoNaturalPage } from '../alimento-natural/alimento-natural';
import { AlimentoPrescripcionPage } from '../alimento-prescripcion/alimento-prescripcion';
import { AlimentoHMedoPage } from '../alimento-hmedo/alimento-hmedo';
import { AlimentoSecoPage } from '../alimento-seco/alimento-seco';

@Component({
  selector: 'page-comida-para-gatos',
  templateUrl: 'comida-para-gatos.html'
})
export class ComidaParaGatosPage {

  constructor(public navCtrl: NavController) {
  }
  goToAlimentoAvanzado(params){
    if (!params) params = {};
    this.navCtrl.push(AlimentoAvanzadoPage);
  }goToAlimentoNatural(params){
    if (!params) params = {};
    this.navCtrl.push(AlimentoNaturalPage);
  }goToAlimentoPrescripcion(params){
    if (!params) params = {};
    this.navCtrl.push(AlimentoPrescripcionPage);
  }goToAlimentoHMedo(params){
    if (!params) params = {};
    this.navCtrl.push(AlimentoHMedoPage);
  }goToAlimentoSeco(params){
    if (!params) params = {};
    this.navCtrl.push(AlimentoSecoPage);
  }
}
