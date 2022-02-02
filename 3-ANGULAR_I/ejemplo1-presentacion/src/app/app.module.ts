/*
LOS MODULOS-----------------
i) Caracteristas:
a.Los modulos son las piezas mas grandes en las que 
se puede dividir una aplicacion(Angular, React, ExpoGo).
b. Serán piezas que podremos reciclar, reutilizar, dentro de nuestro proyecto
o usarlas en otros.
c. Angular nos ofrece modulos nativos, como HTTP,browser, Form..

ii) Categorias de los modulos
a.Nativos: provistos por Angular
b.Terceros: realizado por otras personas y que nosotros podemos usar, libre o de pago
c. Propios:

*/ 

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
/*
NgModule: Palabra reservada para declarar un modulo. contendrá 4 arrays:
1. declaration: Lista de componentes
2. imports: Lista de los modulos
3.providers: lista de servicios
4.bootstrap: Componente de inicio

*/

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

/*

↓ package.json

Es nuestro archivo de configuracion:
Contiene las dependencias/paquetes de angular que vamos a utilizar en nuestra
aplicacion. y que AngularCli (via npm) se ha encargado de instalar por nosotros
en la carpeta node_modules. Estas son librerias imprescindibles que no obstante
podremos seguir añadiendo nuevas librerias para cubrir funcionalidades y/o requisitosw
que necesite nuestro proyecto.

*/
