let apell = "";
apell = "Esteban Prieto";
console.log(apell);


/* Los clientes de un Restaurante pueden pedir del menú: Carne, Pescado o Ensalada.
Si pide Carne se le ofrecerá como bebida vino tinto, si pide Pescado se le ofrecerá vino
blanco y si pide Ensalada se le ofrecerá agua
Si no elije el menú de la lista aparecerá la frase: “elija carne, pescado o ensalada.”
Ejemplo: he pedido carne, el ejercicio mostrará "¿Desea beber vino tinto?"
*/

let menu = prompt("Que menú queiere pedir: carne, pescado ó ensalada escriba la opción:");
console.log(`menú: ${menu}`);

menu=menu.toLowerCase();


switch(menu){

    case "carne": 
    
    console.log("he pedido carne, '¿Desea beber vino tinto?'");

    break;    

    case "pescado": 

    console.log("he pedido pescado, '¿Desea beber vino blanco?'");

    break;

    case "ensalada":
    
    console.log("he pedido Ensalada, '¿Desea beber agua?'");

    break;

    default: console.log("elija carne, pescado o ensalada.");
}

/*
A partir de un número de mes digitado por un usuario el programa debe indicar la estación
del año.
Las estaciones serán 12,1,2: Invierno. 3,4,5 primavera, 6,7,8 verano y 9,10,11 otoño
Si tecleo el 3 el script me responderá que estamos en Primavera
*/

let nmes, estacion;
nmes = parseInt(prompt("Digite un numero de mes del 1 al 12 para saber la estación del año:"));
console.log(`Mes: ${nmes}`);


switch(nmes){

    case 12:
    case 1:
    case 2:
        estacion = "Invierno"
    break;    

    case 3:
    case 4:
    case 5:   
        estacion = "primavera"
    break;

    case 6:
    case 7:
    case 8:
        estacion = "verano"
    break;

    case 9:
    case 10:
    case 11:
        estacion = "otoño"
    break;

    default:
        estacion = "desconocida";
}
alert("La estación del año es: " +estacion);


/*
En una sala de juegos existen cuatro salas: Consolas, Juegos 2D, Juegos 3D y
Realidad Virtual.
Si un usuario paga 4 créditos puede acceder a todas, si paga 3 solo podrá acceder a
las tres primeras,
Si paga 2 a las dos primeras y si paga 1 solo a la primera sala.
Tecleo que pago 2 créditos, el script me dirá que puedo acceder a las salas de
consola y juegos 2D.
*/

let videojuegos, creditos;
creditos = parseInt(prompt("Ingrese sus créditos para poder jugar en las salas, recuerda que el minimo de créditos es 1 y el maximo es 4"));

switch(creditos){

    case 1:
        videojuegos = "Consolas"
    break;

    case 2:
        videojuegos = ("Consolas" + ", " + "Juegos 2D")
    break;

    case 3:
        videojuegos = ("Consolas" + ", " + "Juegos 2D" + ", " + "Juegos 3D")
    break;

    case 4:
        videojuegos = ("Consolas" + ", " + "Juegos 2D" + ", " + "Juegos 3D" + ", " + "Realidad Virtual")
    break;
    default:
        videojuegos = "No tiene acceso a ninguna sala"

}
alert("La sala a la que tiene ingreso es: " +videojuegos)

/*
Un comerciante hace descuentos a sus clientes de la siguiente forma:
Si ha comprado menos de 100 mil pesos no hay descuento
Si la compra está entre 100 mil y 300 mil pesos le descuenta un 5%
Si la compra está por encima de 300 mil hasta 500 mil pesos le descuenta un 10%
Si la compra supera los 400 mil pesos le descuenta un 15%
Es decir: hago una compra de 150 mil: pago 150000 - 5% de 150000, o sea 142,500 pesos.
*/

let compra = prompt("Ingrese el valor total en pesos de la compra realizada:");
let descuentos;
let calculo;

switch(true){
    case compra < 100000:
        descuentos = 0;
        calculo = compra - (compra * descuentos);
    break;
    case (compra >= 100000 && compra <= 300000):
        descuentos = 0.05;
        calculo = compra - (compra * descuentos);
        break;
    case (compra > 300000 && compra <= 500000):
        descuentos = 0.10;
        calculo = compra - (compra * descuentos);
        break;
    case (compra > 500000):
        descuentos = 0.15;
        calculo = compra - (compra * descuentos);
        break;
    default:
        descuentos = 0;
        calculo = compra - (compra * descuentos);        
        break;
}
alert("El total a pagar es: " +calculo);