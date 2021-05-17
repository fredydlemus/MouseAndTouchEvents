var teclas = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39
};

document.addEventListener("keyup", dibujarTeclado);
var cuadrito = document.getElementById("area_de_dibujo");
var papel = cuadrito.getContext("2d");
var x = 150;
var y = 150;

dibujarLinea(papel, "red", 149, 149, 151, 151);

function dibujarLinea(lienzo, color, xinicial, yinical, xfinal, yfinal){
    lienzo.beginPath(); //arranca dibujo
    lienzo.strokeStyle = color; //color de linea
    lienzo.lineWidth = 3; //ancho de linea
    lienzo.moveTo(xinicial, yinical); //posicion de lienzo
    lienzo.lineTo(xfinal, yfinal); //indicando linea
    lienzo.stroke(); //trazando linea
    lienzo.closePath(); //finaliza dibujo (si no la siguiente partira del mismo punto)
}


function dibujarTeclado(evento){

    var colorcito = "blue";
    var movimiento = 10;

    switch(evento.keyCode){

        case teclas.UP:
            dibujarLinea(papel, colorcito, x, y, x, y - movimiento);
            y = y - movimiento;
        break;

        case teclas.DOWN:
            dibujarLinea(papel, colorcito, x, y, x, y + movimiento);
            y = y + movimiento;
        break;

        case teclas.LEFT:
            dibujarLinea(papel, colorcito, x, y, x - movimiento, y);
            x = x - movimiento;
        break;

        case teclas.RIGHT:
            dibujarLinea(papel, colorcito, x, y, x + movimiento, y);
            x = x + movimiento;
        break;

        default:
            console.log("otra tecla");
        break;

    }
    
}