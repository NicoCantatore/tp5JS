//1. Crear un programa que me pida correo y contraseña, debe dar un alerta si los dos datos ingresados son validos

// se puede realizar con una variable fija o confirmando para ser mas dinamico

let mail;
let pass;
let mailOk;
let passOk;

mail = prompt('ingresar su correo electronico');
pass = prompt('ingresar contraseña');
mailOk = prompt('confirme correo')
passOk = prompt('confirme contraseña')

if ((mail == mailOk) && (pass == passOk)) {

    alert('Los datos ingresados son válidos.')

} else {

    alert('Intenta nuevamente')
}


//2. Crear un programa que solo permita ingresar a una persona a un bar si el usuario es mayor de 18 años y su color de remera es roja

let edad;
let colorRemera;

edad = parseInt(prompt('ingrese su edad'))
colorRemera = parseInt(prompt('color remera : opcion 1 roja / 2 otro color'))

if ((edad > 18) && (colorRemera == 1)) {

    alert('Puede ingresar')

} else {

    alert('Menor de edad con remera No especifica')
}


//3. Crear un programa que pida dos notas, evalue el promedio. 
//Debe mostrar un alerta de "Materia aprobada" si las dos primeras notas son mayores a 7 y si el promedio es mayor a 7


let n1;
let n2;
let promedio;

n1 = parseFloat(prompt('Ingrese nota'));
n2 = parseFloat(prompt('Ingrese nota 2'));

promedio = (n1 + n2) / 2;


if (promedio > 7 && n1 > 7 && n2 > 7) {

    alert("Materia aprobada");

} else {

    alert("Materia desaprobada");

}