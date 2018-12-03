import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { GatosPage } from '../pages/gatos/gatos';
import { AccesoriosPage } from '../pages/accesorios/accesorios';
import { HolidayCollarPage } from '../pages/holiday-collar/holiday-collar';
import { FancyCollarPage } from '../pages/fancy-collar/fancy-collar';
import { CollarDeNylonPage } from '../pages/collar-de-nylon/collar-de-nylon';
import { CollarDeFloresPage } from '../pages/collar-de-flores/collar-de-flores';
import { CollarCascabelesPage } from '../pages/collar-cascabeles/collar-cascabeles';
import { ComidaParaGatosPage } from '../pages/comida-para-gatos/comida-para-gatos';
import { AlimentoAvanzadoPage } from '../pages/alimento-avanzado/alimento-avanzado';
import { AlimentoNaturalPage } from '../pages/alimento-natural/alimento-natural';
import { AlimentoPrescripcionPage } from '../pages/alimento-prescripcion/alimento-prescripcion';
import { AlimentoHMedoPage } from '../pages/alimento-hmedo/alimento-hmedo';
import { AlimentoSecoPage } from '../pages/alimento-seco/alimento-seco';
import { JuguetesPage } from '../pages/juguetes/juguetes';
import { JugueteZorritoPage } from '../pages/juguete-zorrito/juguete-zorrito';
import { VaritaConPeluchePage } from '../pages/varita-con-peluche/varita-con-peluche';
import { JugueteDeRatoncitosPage } from '../pages/juguete-de-ratoncitos/juguete-de-ratoncitos';
import { RatoncitosPage } from '../pages/ratoncitos/ratoncitos';
import { TunelPage } from '../pages/tunel/tunel';
import { RopaPage } from '../pages/ropa/ropa';
import { SueterRojoPage } from '../pages/sueter-rojo/sueter-rojo';
import { SueterVerdePage } from '../pages/sueter-verde/sueter-verde';
import { SueterBlancoPage } from '../pages/sueter-blanco/sueter-blanco';
import { SueterColoresPage } from '../pages/sueter-colores/sueter-colores';
import { SueterAzulPage } from '../pages/sueter-azul/sueter-azul';
import { PerrosPage } from '../pages/perros/perros';
import { PromocionesPage } from '../pages/promociones/promociones';
import { PromocionesPerroPage } from '../pages/promociones-perro/promociones-perro';
import { ComidaParaPerrosPage } from '../pages/comida-para-perros/comida-para-perros';
import { PromocionesGatoPage } from '../pages/promociones-gato/promociones-gato';
import { NosotrosPage } from '../pages/nosotros/nosotros';
import { AdoptaPage } from '../pages/adopta/adopta';
import { GraciasPage } from '../pages/gracias/gracias';


import { InicioPage } from '../pages/inicio/inicio';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) navCtrl: Nav;
    rootPage:any = InicioPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  goToGatos(params){
    if (!params) params = {};
    this.navCtrl.setRoot(GatosPage);
  }goToAccesorios(params){
    if (!params) params = {};
    this.navCtrl.setRoot(AccesoriosPage);
  }goToHolidayCollar(params){
    if (!params) params = {};
    this.navCtrl.setRoot(HolidayCollarPage);
  }goToFancyCollar(params){
    if (!params) params = {};
    this.navCtrl.setRoot(FancyCollarPage);
  }goToCollarDeNylon(params){
    if (!params) params = {};
    this.navCtrl.setRoot(CollarDeNylonPage);
  }goToCollarDeFlores(params){
    if (!params) params = {};
    this.navCtrl.setRoot(CollarDeFloresPage);
  }goToCollarCascabeles(params){
    if (!params) params = {};
    this.navCtrl.setRoot(CollarCascabelesPage);
  }goToComidaParaGatos(params){
    if (!params) params = {};
    this.navCtrl.setRoot(ComidaParaGatosPage);
  }goToAlimentoAvanzado(params){
    if (!params) params = {};
    this.navCtrl.setRoot(AlimentoAvanzadoPage);
  }goToAlimentoNatural(params){
    if (!params) params = {};
    this.navCtrl.setRoot(AlimentoNaturalPage);
  }goToAlimentoPrescripcion(params){
    if (!params) params = {};
    this.navCtrl.setRoot(AlimentoPrescripcionPage);
  }goToAlimentoHMedo(params){
    if (!params) params = {};
    this.navCtrl.setRoot(AlimentoHMedoPage);
  }goToAlimentoSeco(params){
    if (!params) params = {};
    this.navCtrl.setRoot(AlimentoSecoPage);
  }goToJuguetes(params){
    if (!params) params = {};
    this.navCtrl.setRoot(JuguetesPage);
  }goToJugueteZorrito(params){
    if (!params) params = {};
    this.navCtrl.setRoot(JugueteZorritoPage);
  }goToVaritaConPeluche(params){
    if (!params) params = {};
    this.navCtrl.setRoot(VaritaConPeluchePage);
  }goToJugueteDeRatoncitos(params){
    if (!params) params = {};
    this.navCtrl.setRoot(JugueteDeRatoncitosPage);
  }goToRatoncitos(params){
    if (!params) params = {};
    this.navCtrl.setRoot(RatoncitosPage);
  }goToTunel(params){
    if (!params) params = {};
    this.navCtrl.setRoot(TunelPage);
  }goToRopa(params){
    if (!params) params = {};
    this.navCtrl.setRoot(RopaPage);
  }goToSueterRojo(params){
    if (!params) params = {};
    this.navCtrl.setRoot(SueterRojoPage);
  }goToSueterVerde(params){
    if (!params) params = {};
    this.navCtrl.setRoot(SueterVerdePage);
  }goToSueterBlanco(params){
    if (!params) params = {};
    this.navCtrl.setRoot(SueterBlancoPage);
  }goToSueterColores(params){
    if (!params) params = {};
    this.navCtrl.setRoot(SueterColoresPage);
  }goToSueterAzul(params){
    if (!params) params = {};
    this.navCtrl.setRoot(SueterAzulPage);
  }goToPerros(params){
    if (!params) params = {};
    this.navCtrl.setRoot(PerrosPage);
  }goToPromociones(params){
    if (!params) params = {};
    this.navCtrl.setRoot(PromocionesPage);
  }goToPromocionesPerro(params){
    if (!params) params = {};
    this.navCtrl.setRoot(PromocionesPerroPage);
  }goToComidaParaPerros(params){
    if (!params) params = {};
    this.navCtrl.setRoot(ComidaParaPerrosPage);
  }goToPromocionesGato(params){
    if (!params) params = {};
    this.navCtrl.setRoot(PromocionesGatoPage);
  }goToNosotros(params){
    if (!params) params = {};
    this.navCtrl.setRoot(NosotrosPage);
  }goToAdopta(params){
    if (!params) params = {};
    this.navCtrl.setRoot(AdoptaPage);
  }goToGracias(params){
    if (!params) params = {};
    this.navCtrl.setRoot(GraciasPage);
  }
}
