import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainPageComponent } from './main-page/main-page.component';
import { PersonajesComponent } from './personajes/personajes.component';
import { AgregarComponent } from './agregar/agregar.component';

import { DbzService } from './services/dbz.service';

// El PersonajesComponent no hay que exportarlo porque sólo se va a usar dentro del propio módulo (en el main-page.component.html)
// Otra forma de verlo sería que no hay problema porque como sólo se usa en el MainPageComponent y este ya es el módulo que vamos a exportar,
// no nos va a chillar

@NgModule({
  declarations: [
    MainPageComponent,
    PersonajesComponent,
    AgregarComponent
  ],
  exports:[
    MainPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  // En este apartado de providers debemos poner los servicios (si es que los tiene) que tiene/usa mi módulo
  providers: [
    DbzService
  ]
})
export class DbzModule { }
