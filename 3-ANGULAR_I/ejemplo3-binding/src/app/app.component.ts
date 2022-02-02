import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ejemplo3-binding';
  nombre: string = 'Toño';
  apellido: string ='Cuadrado'
  habilitado: boolean = true;

  estilo = 'rojo';


  //constructor-funcion que llama para crear objetos
  constructor() {

    setTimeout(() => { this.habilitado = false; }, 5000);
  }

  saludar(): void {
    alert('Hola....! Bienvenido a Angular I !!!');
  }


}




