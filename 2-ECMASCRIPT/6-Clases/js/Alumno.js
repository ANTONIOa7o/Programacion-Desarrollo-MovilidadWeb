

/*
CLASES--------------
ESCMA6  utilizaremos las clases para poder implementar ciertos objetos que 
vayamos a utilizar en nuestras aplicaciones. Dandonos una ventaja táctica
en la implementación de las herencias dentro de los componentes de  nuestro
codigo.
-:-los nombres de las Clases comienzan por Mayusculas
Sintaxis:

class Nombre{
    constructor()
}
metodo(){

}
Ejemplo de refencia:

class Persona{
    constructor(){
        //elementos que definen Persona
    }
    hablar(){

    }
    acciones(){
        //llamada al metodo hablar
        this.hablar()
    }
}
*/
class Alumno{
//Caracteristicas del objeto
//Propiedades
//Variables Globales
id;
nombre;
apellidos;
nota;
//Constructor
constructor(id, nombre,apellidos,nota){
    this.id = id;
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.nota =  nota;
}// El puntero this nos servirá para diferenciar las propiedades
// de los argumentos recibidos por el constructor.

mostrarInformacion(){
    document.write(`Datos del alumno: id ${this.id},nombre ${this.nombre},
    apellidos${this.apellidos},nota${this.nota}`+"<br/>");
}
//Acciones podemas llevar a cabo con el object
//metodos
//funciones








}