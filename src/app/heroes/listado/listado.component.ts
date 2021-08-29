import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {
  public heroes: string[] = ['Ironman', 'Spiderman', 'Thor', 'Hulk', 'Capitán América'];
  public heroeBorrado: string = '';

  borrarHeroe()
  {
    // Manera 1
    // let cantidad = this.heroes.length;
    // this.heroes.splice((cantidad - 1), 1);

    // Manera 2
    // this.heroes.length = 0;

    // Manera 3
    this.heroeBorrado = this.heroes.shift() || '';  // Si el .shift() devuelve un undefined entonces que heroeBorrado valga ''
  }
}
