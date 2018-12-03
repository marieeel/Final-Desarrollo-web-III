import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { InicioPage } from '../pages/inicio/inicio';
import { CarritoPage } from '../pages/carrito/carrito';
import { FavoritosPage } from '../pages/favoritos/favoritos';
import { TabsControllerPage } from '../pages/tabs-controller/tabs-controller';
import { GatosPage } from '../pages/gatos/gatos';
import { PerrosPage } from '../pages/perros/perros';
import { AccesoriosPage } from '../pages/accesorios/accesorios';
import { ComidaParaGatosPage } from '../pages/comida-para-gatos/comida-para-gatos';
import { ComidaParaPerrosPage } from '../pages/comida-para-perros/comida-para-perros';
import { JuguetesPage } from '../pages/juguetes/juguetes';
import { RopaPage } from '../pages/ropa/ropa';
import { PromocionesPage } from '../pages/promociones/promociones';
import { HolidayCollarPage } from '../pages/holiday-collar/holiday-collar';
import { FancyCollarPage } from '../pages/fancy-collar/fancy-collar';
import { CollarDeNylonPage } from '../pages/collar-de-nylon/collar-de-nylon';
import { CollarDeFloresPage } from '../pages/collar-de-flores/collar-de-flores';
import { CollarCascabelesPage } from '../pages/collar-cascabeles/collar-cascabeles';
import { AlimentoAvanzadoPage } from '../pages/alimento-avanzado/alimento-avanzado';
import { AlimentoNaturalPage } from '../pages/alimento-natural/alimento-natural';
import { AlimentoPrescripcionPage } from '../pages/alimento-prescripcion/alimento-prescripcion';
import { AlimentoHMedoPage } from '../pages/alimento-hmedo/alimento-hmedo';
import { AlimentoSecoPage } from '../pages/alimento-seco/alimento-seco';
import { JugueteZorritoPage } from '../pages/juguete-zorrito/juguete-zorrito';
import { VaritaConPeluchePage } from '../pages/varita-con-peluche/varita-con-peluche';
import { JugueteDeRatoncitosPage } from '../pages/juguete-de-ratoncitos/juguete-de-ratoncitos';
import { RatoncitosPage } from '../pages/ratoncitos/ratoncitos';
import { TunelPage } from '../pages/tunel/tunel';
import { SueterRojoPage } from '../pages/sueter-rojo/sueter-rojo';
import { SueterVerdePage } from '../pages/sueter-verde/sueter-verde';
import { SueterBlancoPage } from '../pages/sueter-blanco/sueter-blanco';
import { SueterColoresPage } from '../pages/sueter-colores/sueter-colores';
import { SueterAzulPage } from '../pages/sueter-azul/sueter-azul';
import { NosotrosPage } from '../pages/nosotros/nosotros';
import { AdoptaPage } from '../pages/adopta/adopta';
import { PromocionesGatoPage } from '../pages/promociones-gato/promociones-gato';
import { PromocionesPerroPage } from '../pages/promociones-perro/promociones-perro';
import { GraciasPage } from '../pages/gracias/gracias';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    InicioPage,
    CarritoPage,
    FavoritosPage,
    TabsControllerPage,
    GatosPage,
    PerrosPage,
    AccesoriosPage,
    ComidaParaGatosPage,
    ComidaParaPerrosPage,
    JuguetesPage,
    RopaPage,
    PromocionesPage,
    HolidayCollarPage,
    FancyCollarPage,
    CollarDeNylonPage,
    CollarDeFloresPage,
    CollarCascabelesPage,
    AlimentoAvanzadoPage,
    AlimentoNaturalPage,
    AlimentoPrescripcionPage,
    AlimentoHMedoPage,
    AlimentoSecoPage,
    JugueteZorritoPage,
    VaritaConPeluchePage,
    JugueteDeRatoncitosPage,
    RatoncitosPage,
    TunelPage,
    SueterRojoPage,
    SueterVerdePage,
    SueterBlancoPage,
    SueterColoresPage,
    SueterAzulPage,
    NosotrosPage,
    AdoptaPage,
    PromocionesGatoPage,
    PromocionesPerroPage,
    GraciasPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    InicioPage,
    CarritoPage,
    FavoritosPage,
    TabsControllerPage,
    GatosPage,
    PerrosPage,
    AccesoriosPage,
    ComidaParaGatosPage,
    ComidaParaPerrosPage,
    JuguetesPage,
    RopaPage,
    PromocionesPage,
    HolidayCollarPage,
    FancyCollarPage,
    CollarDeNylonPage,
    CollarDeFloresPage,
    CollarCascabelesPage,
    AlimentoAvanzadoPage,
    AlimentoNaturalPage,
    AlimentoPrescripcionPage,
    AlimentoHMedoPage,
    AlimentoSecoPage,
    JugueteZorritoPage,
    VaritaConPeluchePage,
    JugueteDeRatoncitosPage,
    RatoncitosPage,
    TunelPage,
    SueterRojoPage,
    SueterVerdePage,
    SueterBlancoPage,
    SueterColoresPage,
    SueterAzulPage,
    NosotrosPage,
    AdoptaPage,
    PromocionesGatoPage,
    PromocionesPerroPage,
    GraciasPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}