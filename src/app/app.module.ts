import { environment } from './../environments/environment';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule,NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
//import { routing } from "./app-routing.module";
// import { JuegoServiceService } from './servicios/juego-service.service';
 import { RuteandoModule } from './ruteando/ruteando.module';

// import { JugadoresService } from './servicios/jugadores.service'; 
import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { PrincipalComponent } from './componentes/principal/principal.component';
//import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
 import { ErrorComponent } from './componentes/error/error.component';
 import { CabeceraComponent } from './componentes/cabecera/cabecera.component';
 import { QuienSoyComponent } from './componentes/quien-soy/quien-soy.component';
import { JuegosComponent } from './componentes/juegos/juegos.component';
 import { MenuComponent } from './componentes/menu/menu.component';
 import { MenuCardComponent } from './componentes/menu-card/menu-card.component';
 import { TatetiComponent } from './componentes/tateti/tateti.component';
 import { PiedrapapeltijeraComponent } from './componentes/piedrapapeltijera/piedrapapeltijera.component';
 import { AnagramaComponent } from './componentes/anagrama/anagrama.component';
  import { MemotestComponent } from './componentes/memotest/memotest.component';
 import { AgilidadAritmeticaComponent } from './componentes/agilidad-aritmetica/agilidad-aritmetica.component';
 import { AdivinaElNumeroComponent } from './componentes/adivina-el-numero/adivina-el-numero.component';
 import { JugadorDetalleComponent } from './componentes/jugador-detalle/jugador-detalle.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    PrincipalComponent,
    ErrorComponent,
     CabeceraComponent,
    QuienSoyComponent,
     JuegosComponent,
    MenuComponent,
    MenuCardComponent,
     TatetiComponent,
     PiedrapapeltijeraComponent,
     AnagramaComponent,
     MemotestComponent,
     AgilidadAritmeticaComponent,
     AdivinaElNumeroComponent,
     JugadorDetalleComponent
 
  ],
  imports: [
    BrowserModule,
    RuteandoModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ],
  providers: [
    //JuegoServiceService,JugadoresService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
