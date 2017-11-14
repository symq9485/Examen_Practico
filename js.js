/*-------------------------------Circulo--------------------------------------*/

document.getElementById("calcirculo").addEventListener("mouseover", colorc);
document.getElementById("calcirculo").addEventListener("mouseout", scolorc);

function colorc() {
  document.getElementById("body").style.background = "yellow";
  document.getElementById("divc").style.background = "white";
}

function scolorc() {
  document.getElementById("body").style.background = "white";
  document.getElementById("divc").style.background = "rgb(167, 167, 167)";
}


/*------------------------------Triangulo-------------------------------------*/

document.getElementById("caltriangulo").addEventListener("mouseover", colort);
document.getElementById("caltriangulo").addEventListener("mouseout", scolort);

function colort() {
  document.getElementById("body").style.background = "blue";
  document.getElementById("divt").style.background = "white";
}

function scolort() {
  document.getElementById("body").style.background = "white";
  document.getElementById("divt").style.background = "rgb(167, 167, 167)";
}

/*-------------------------------Rectangulo-----------------------------------*/

document.getElementById("calrectangulo").addEventListener("mouseover", colorr);
document.getElementById("calrectangulo").addEventListener("mouseout", scolorr);

function colorr() {
  document.getElementById("body").style.background = "red";
  document.getElementById("divr").style.background = "white";
}

function scolorr() {
  document.getElementById("body").style.background = "white";
  document.getElementById("divr").style.background = "rgb(167, 167, 167)";
}

/*------------------------------Operaciones-----------------------------------*/
/*------------------------------Circulo---------------------------------------*/

document.getElementById("calcirculo").addEventListener("click", calcirculo);
function calcirculo(){
	var radio=document.getElementById("rcirculo").value;
  if(radio == ""){
    alert("Ingrese el radio del circulo para calcular el area");
  }
  else{
  alert("El area del circulo es=" + (2 * parseInt(radio) * 3.1416) + " cm^2");
  }
  rcirculo = "";
}
/*-------------------------------Triangulo------------------------------------*/
document.getElementById("caltriangulo").addEventListener("click", caltriangulo);
function caltriangulo(){
	var btriangulo=document.getElementById("btriangulo").value;
  var atriangulo=document.getElementById("atriangulo").value;
  if((btriangulo == "")||(atriangulo == "")){
    alert("Ingrese la base y la altura del triangulo para calcular el area");
  }
  else{
    alert("El area del triangulo es=" + ((parseInt(btriangulo) * parseInt(atriangulo))/2) + " cm^2");
  }
  btriangulo = "";
  atriangulo = "";
}
/*----------------------------Rectangulo--------------------------------------*/
document.getElementById("calrectangulo").addEventListener("click", calrectangulo);
function calrectangulo(){
	var brectangulo=document.getElementById("brectangulo").value;
  var arectangulo=document.getElementById("arectangulo").value;
  if((brectangulo == "")||(arectangulo == "")){
    alert("Ingrese la base y la altura del rectangulo para calcular el area");
  }
  else{
    alert("El area del rectangulo es=" + (parseInt(brectangulo) * parseInt(arectangulo)) + " cm^2");
  }
  brectangulo = "";
  arectangulo = "";
}
