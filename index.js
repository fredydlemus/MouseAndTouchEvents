var cuadro = document.getElementById("cuadro");
var lienzo = cuadro.getContext("2d");
var color = "blue";


cuadro.addEventListener('mousedown', inicioTrazo);
cuadro.addEventListener('touchstart', inicioTrazo);




function inicioTrazo(evento){

    var xi = evento.layerX;
    var yi = evento.layerY;

    dibujarLinea(lienzo, color, xi, yi, xi + 2, yi+2)
    console.log('inicio trazo');
    cuadro.addEventListener('mousemove', enMovimiento);
    cuadro.addEventListener('touchmove', enMovimientoTouch);
    cuadro.addEventListener('mouseup', finalizoTrazo);

    function enMovimiento(evento){
        
        console.log('en movimiento');
        console.log(evento)
        var xf = evento.layerX;
        var yf = evento.layerY;
        dibujarLinea(lienzo, color, xi, yi, xf, yf);
        xi = xf;
        yi = yf;
    }

    function enMovimientoTouch(evento){
        console.log('en movimiento');
        console.log(evento)
        var xf = evento.touches[0].pageX;
        var yf = evento.touches[0].pageY;
        dibujarLinea(lienzo, color, xi, yi, xf, yf);
        xi = xf;
        yi = yf;
    }

    function finalizoTrazo(){
    
        console.log("finalizo linea");
        cuadro.removeEventListener('mousemove', enMovimiento);
    }
}



function dibujarLinea(lienzo, color, xinicial, yinical, xfinal, yfinal){
    lienzo.beginPath(); 
    lienzo.strokeStyle = color; 
    lienzo.lineWidth = 3; 
    lienzo.moveTo(xinicial, yinical); 
    lienzo.lineTo(xfinal, yfinal); 
    lienzo.stroke(); 
    lienzo.closePath(); 
}