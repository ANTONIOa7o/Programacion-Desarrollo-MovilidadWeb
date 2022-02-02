import { Component } from '@angular/core';

/*
-----------------------------/ COMPONENTES EN ANGULAR /-------------------
Un módulo en un app, tiene una entidad propia y puede estar compuesta por vas de un componente
Un componente seria cada vista, y estas pueden o no componerse de otros componentes; Dependerá 
de la complejidad, profunidad o/y reutilizacion de codigo.





--- app.component.ts----------------------
Será el componente principal de la aplicacion donde se define la clase del componente
(AppComponent).
 Este componente consta de:
 a)
 @Componente: Esta será una palabra reservada para declarar componentes. Contine 
 varios elementos, entre ellos:
 *selector: donde apunta la inserción del componente
 *templateUrl: archivos html que se usaran en el componente
 *StyleUrls: archivos css que se usarán el template
*/

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
/*
b)
export class AppComponent{

nombre: string = "Toño";

}
*/

export class AppComponent {
  title = 'ejemplo1-presentacion';
}
