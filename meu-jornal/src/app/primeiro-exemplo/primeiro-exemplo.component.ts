import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-primeiro-exemplo',
  templateUrl: './primeiro-exemplo.component.html',
  styleUrls: ['./primeiro-exemplo.component.css']
})
export class PrimeiroExemploComponent implements OnInit {
nome: string='';
public atualizaNome(novoNome: Event){
  this.nome = (<|HTMLInputElement>novoNome.target).value;
}
  constructor() { }

  ngOnInit() {
  }

}
