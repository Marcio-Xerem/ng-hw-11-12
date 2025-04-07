import { Component } from '@angular/core';
import vdados from './dados.json';

@Component({
  selector: 'app-lista-json',
  imports: [],
  templateUrl: './lista-json.component.html',
  styleUrl: './lista-json.component.css'
})
export class ListaJsonComponent {
  _listaLojas = vdados;
}
