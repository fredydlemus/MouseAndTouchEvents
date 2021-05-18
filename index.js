var cuadro = document.getElementById("cuadro");
var lienzo = cuadro.getContext("2d");
var color = "blue";
var yi;
var xi;


cuadro.addEventListener('mousedown', esMouse);
cuadro.addEventListener('touchstart', esTouch, true);



function esTouch(evento){
    
    evento.preventDefault();

    xi = evento.touches[0].pageX;
    yi = evento.touches[0].pageY;
    dibujarLinea(lienzo, color, xi, yi, xi + 2, yi+2)
    
    cuadro.addEventListener('touchmove', enMovimientoTouch);
    cuadro.addEventListener('touchend', () => cuadro.removeEventListener('touchmove', enMovimientoTouch));


    function enMovimientoTouch(evento){
        // console.log('en movimiento con touch');
        // console.log(evento)
        // console.log(evento.touches[0].pageX)

        var xf = evento.touches[0].pageX;
        var yf = evento.touches[0].pageY;
        // console.log("variables:")
        // console.log(xi + " " + yi);
        // console.log(xf + " " + yf);
        dibujarLinea(lienzo, color, xi, yi, xf, yf);
        xi = xf;
        yi = yf;
    }
    
}

function esMouse(evento){
    yi = evento.layerY;
    xi = evento.layerX;
    dibujarLinea(lienzo, color, xi, yi, xi + 2, yi+2)

    cuadro.addEventListener('mousemove', enMovimiento);
    cuadro.addEventListener('mouseup', () => cuadro.removeEventListener('mousemove', enMovimiento));

    function enMovimiento(evento){
        
        // console.log('en movimiento con mouse');
        // console.log(evento)
        var xf = evento.layerX;
        var yf = evento.layerY;
        dibujarLinea(lienzo, color, xi, yi, xf, yf);
        xi = xf;
        yi = yf;
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