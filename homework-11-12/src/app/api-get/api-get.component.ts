import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

type RespostaApiNumeros = {
  text: string,
  number: number,
  found: boolean,
  type: string
}

@Component({
  selector: 'app-api-get',
  imports: [FormsModule, CommonModule],
  templateUrl: './api-get.component.html',
  styleUrls: ['./api-get.component.css']
})
export class ApiGetComponent {
  _userNumber: number = 0;
  _mensagem: string = '';

  constructor(private requisicao: HttpClient){}

  buscarDadosNumero(){
    this._mensagem = `Buscando curiosidades sobre o número ${this._userNumber}...`;
    this.requisicao.get<RespostaApiNumeros>(`http://numbersapi.com/${this._userNumber}?json`).subscribe(vresponse => {
      this._mensagem = `Curiosidades: ${vresponse.text}`;
    });
  }
}
