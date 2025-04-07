import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

type RespostaAPI = {
  id: number,
  title: string,
  body: string,
  userId: number
}

@Component({
  selector: 'app-api-post',
  imports: [FormsModule],
  templateUrl: './api-post.component.html',
  styleUrl: './api-post.component.css'
})
export class ApiPostComponent {
  _titulo: string = '';
  _corpo: string = '';
  _idusuario: number = 0;
  _dadosResponse = null;
  _mensagem:string = '';

  constructor(private requisicao: HttpClient){}

  criarPostFake(){
    this._mensagem = 'Criando post...';

    if(this._titulo != '' && this._corpo != '' && this._idusuario != 0){
      let fakeObj = {
        title: this._titulo,
        body: this._corpo,
        userId: this._idusuario,
      }
      this.requisicao.post<RespostaAPI>(
        'https://jsonplaceholder.typicode.com/posts',
        JSON.stringify(fakeObj),
        {
          headers: new HttpHeaders('Content-type: application/json; charset=UTF-8')
        }
      ).subscribe(dados => {
        this._mensagem = `Post criado! Chave => ${dados.id}.`;
      })
    } else {
      this._mensagem = 'Dados em branco.';
    }
  }
}
