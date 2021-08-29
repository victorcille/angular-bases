import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { HeroeComponent } from "./heroe/heroe.component";
import { ListadoComponent } from "./listado/listado.component";

@NgModule({
    // En las declaraciones van todos los componentes que forman parte del módulo
    declarations: [
        HeroeComponent,
        ListadoComponent
    ],

    // En los exports debemos especificar los componentes que queremos que sean visibles en toda la aplicación (fuera de este módulo)
    // (por ejemplo si van a ser usados en otra parte de nuestra aplicación como en el app.component.html)
    exports: [
        ListadoComponent
    ],

    // En los imports debemos especificar los sub-modulos que este módulo contenga (si es que los hay) o alguno en especial como el CommonModule
    // Fijarse en el app.module.ts como en en el apartado de imports estamos importando este HeroesModule para poder utilizar todos los
    // componentes de la carpeta heroes
    imports: [
        // Este módulo es necesario para poder usar las directivas *ngIf, *ngFor, etc en las plantillas de los componentes que forman este módulo
        CommonModule
    ]
})
export class HeroesModule {}