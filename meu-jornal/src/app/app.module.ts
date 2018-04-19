import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NoticiaModule } from './noticia/noticia.module';


import { AppComponent } from './app.component';
import { TopoComponent } from './topo/topo.component';
import { RodapeComponent } from './rodape/rodape.component';
import { AlertaComponent } from './alerta/alerta.component';


@NgModule({
  declarations: [
    AppComponent,
    TopoComponent,
    RodapeComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NoticiaModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
