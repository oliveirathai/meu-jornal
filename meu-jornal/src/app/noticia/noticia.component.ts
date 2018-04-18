import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.css']
})
export class NoticiaComponent implements OnInit {

  noticias: String[] = ["Noticia1",
    "Noticia 2,",
    "Noticia 3",
    "Noticia 4"];
  mostrarNoticia: boolean = true;

  constructor() { }

  ngOnInit() {
  }
public esconderNoticia(){
  this.mostrarNoticia = false;
  }
  public voltarPagina(){
    this.mostrarNoticia = true;
  }
}
