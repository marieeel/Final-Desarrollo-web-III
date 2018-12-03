import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AccesoriosPage } from '../accesorios/accesorios';
import { HolidayCollarPage } from '../holiday-collar/holiday-collar';
import { FancyCollarPage } from '../fancy-collar/fancy-collar';
import { CollarDeNylonPage } from '../collar-de-nylon/collar-de-nylon';
import { CollarDeFloresPage } from '../collar-de-flores/collar-de-flores';
import { CollarCascabelesPage } from '../collar-cascabeles/collar-cascabeles';
import { JuguetesPage } from '../juguetes/juguetes';
import { JugueteZorritoPage } from '../juguete-zorrito/juguete-zorrito';
import { VaritaConPeluchePage } from '../varita-con-peluche/varita-con-peluche';
import { JugueteDeRatoncitosPage } from '../juguete-de-ratoncitos/juguete-de-ratoncitos';
import { RatoncitosPage } from '../ratoncitos/ratoncitos';
import { TunelPage } from '../tunel/tunel';
import { RopaPage } from '../ropa/ropa';
import { SueterRojoPage } from '../sueter-rojo/sueter-rojo';
import { SueterVerdePage } from '../sueter-verde/sueter-verde';
import { SueterBlancoPage } from '../sueter-blanco/sueter-blanco';
import { SueterColoresPage } from '../sueter-colores/sueter-colores';
import { SueterAzulPage } from '../sueter-azul/sueter-azul';
import { ComidaParaPerrosPage } from '../comida-para-perros/comida-para-perros';

@Component({
  selector: 'page-perros',
  templateUrl: 'perros.html'
})
export class PerrosPage {

  constructor(public navCtrl: NavController) {
  }
  goToAccesorios(params){
    if (!params) params = {};
    this.navCtrl.push(AccesoriosPage);
  }goToHolidayCollar(params){
    if (!params) params = {};
    this.navCtrl.push(HolidayCollarPage);
  }goToFancyCollar(params){
    if (!params) params = {};
    this.navCtrl.push(FancyCollarPage);
  }goToCollarDeNylon(params){
    if (!params) params = {};
    this.navCtrl.push(CollarDeNylonPage);
  }goToCollarDeFlores(params){
    if (!params) params = {};
    this.navCtrl.push(CollarDeFloresPage);
  }goToCollarCascabeles(params){
    if (!params) params = {};
    this.navCtrl.push(CollarCascabelesPage);
  }goToComidaParaPerros(params){
    if (!params) params = {};
    this.navCtrl.push(ComidaParaPerrosPage);
  }goToAlimentoAvanzado(params){
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
  }goToJuguetes(params){
    if (!params) params = {};
    this.navCtrl.push(JuguetesPage);
  }goToJugueteZorrito(params){
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
  }goToRopa(params){
    if (!params) params = {};
    this.navCtrl.push(RopaPage);
  }goToSueterRojo(params){
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
