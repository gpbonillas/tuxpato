var dibujo, lienzo, t, b;
function inicio()
{
	t = document.getElementById("usuario");
	b = document.getElementById("dibujalo");
	dibujo = document.getElementById("dibujito");
	lienzo = dibujo.getContext("2d");
	
	b.addEventListener("click", dibujarGrilla);

	lienzo.beginPath();
	lienzo.strokeStyle = "#00F";
	lienzo.arc(150, 150, 100, (Math.PI * 2), false);
	lienzo.fillStyle = '#98CA3F';
    lienzo.fill();
	lienzo.closePath();
	lienzo.stroke();
}

// Tarea 1: Trazar las lineas (10 inclinadas a la izquierda y 10 inclinadas a la derecha) 
// en diagonal para semejar una X en cada celda.
// Tarea 2: Rellenar el circulo de algun color.

function dibujarGrilla () 
{
	var l = lienzo;
	var rayas = Number(t.value);
	var ancho = 300, alto = 300;
	var linea, punto;
	var anchoLinea = ancho / rayas;
	var limiteX = ancho / anchoLinea;
	var limiteY = alto / anchoLinea;	

	for (linea = 0; linea <= limiteX; linea++) 
	{
		
		punto = linea * anchoLinea;
		l.beginPath();		
		l.strokeStyle = "#AAA";
		l.moveTo(punto, 0);
		l.lineTo(punto, ancho);	
		
		l.moveTo(0, punto);	
		l.lineTo(alto, punto);		
		

		// Dibujar las líneas diagonales a la derecha del triángulo (0, 0), (0, 300), (300, 0)
		l.moveTo(punto, 0);
		l.lineTo(0, punto);		
		// Dibuja las líneas en el triangulo: (300,0), (0, 300), (300, 300)
		l.moveTo(ancho, punto);
		l.lineTo(punto, alto);

		//Dibujar las líneas diagonales a la izquierda del triángulo (0, 0), (300, 0), (300, 300)
		l.moveTo(punto, 0);
		l.lineTo(ancho, (alto - punto));

		//Dibujar las líneas diagonales a la izquierda del triángulo (0, 0), (0, 300), (300, 300)
		l.moveTo(0, punto);
		l.lineTo((ancho - punto), ancho);

		l.stroke();
		l.closePath();
	}

}
