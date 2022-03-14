import { Component, Input } from '@angular/core';

import { Personaje } from "../interfaces/dbz.interface";

import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html'
})
export class PersonajesComponent {
  
  // En un principio estábamos usando este Input, pero ahora la comunicación entre los componentes lo estamos haciendo a través del servicio
  // @Input('data') personajes: Personaje[] = [];
  // @Input() personajes: Personaje[] = [];  esto tb funciona si en el padre le pasamos la información así => [personajes]="personajes"

  constructor(private _dbzService: DbzService){}

  get personajes(): Personaje[]
  {
    // Los getter son usados como propiedades y no como métodos, por eso lo usamos así => .personajes y no así => .personajes()
    return this._dbzService.personajes;
  }
}
