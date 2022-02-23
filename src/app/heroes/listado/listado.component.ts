import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {
heroeBorrado:any='';
heroes : string[] = ['Spiderman','Ironman','Hulk','Thor'];

borrarHeroe(){
  this.heroeBorrado = this.heroes.shift();
  console.log('Borrando...');

}

}
