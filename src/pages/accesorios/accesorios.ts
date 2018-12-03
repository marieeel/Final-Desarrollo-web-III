import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HolidayCollarPage } from '../holiday-collar/holiday-collar';
import { FancyCollarPage } from '../fancy-collar/fancy-collar';
import { CollarDeNylonPage } from '../collar-de-nylon/collar-de-nylon';
import { CollarDeFloresPage } from '../collar-de-flores/collar-de-flores';
import { CollarCascabelesPage } from '../collar-cascabeles/collar-cascabeles';

@Component({
  selector: 'page-accesorios',
  templateUrl: 'accesorios.html'
})
export class AccesoriosPage {

  constructor(public navCtrl: NavController) {
  }
  goToHolidayCollar(params){
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
  }
}
