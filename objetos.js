const personaArreglo = ['Gioavnni', 21, 'gio@gmail.com', true, true];
// de esta forma se declara un objeto 👇
const persona = {
    nombre: 'Giovanni',
    edad: 21,
    correo: 'gio@gmail.com',
    //se pueden declar más objetos dentro de objetos
    subcripciones: {
        web: true,
        correo: true,
    },
    colresFavoritos: ['Negro', 'Rojo'],
    //podemos declarar funciones que por estar dentro de un objeto recive el nombre de método 
    saludo: function(){
        alert('Hola!');
    },
};
// Esta es una forma de llamar un valor del objeto
console.log(persona.nombre);
//esta es una forma diferente pero sera de más utilidad en casos más complejos
console.log(persona['edad']);

/*
ejemplo
de esta forma accedemos a las variables dentro de un obeto 
asignando el valor a una variable diferente
*/
const variable = 'subcripciones';
console.log(persona[variable]);
//accedemos dentro del objeto anidado
console.log(persona.subcripciones.correo);
/*
de esta forma agregamos una nueva variable al objeto y se asigna desde otro sitio,
😮impresionante
*/ 
persona.pais='México';
// se puede sobreescribir ahora va a imprimir en consola USA 
persona.pais='USA';
console.log(persona.pais);


/*LAS FUNCIONES DENTRO DE LOS OBJETOS SE LLAMAN MÉTODOS 
siento que esta un poco diferente en cuestión de terminos 
en comparacion a otros lenguajes se ejecuta de la siguiente forma.*/
persona.saludo();