
	#pragma strict
	//static cam: Camera;
	//static backgroundCam: Camera;
	
	
	
	
	
	
private var ancho_fict:double;
private var alto_fict:double;

private var posx_primera:double;
private var posy_primera:double;

private var posy_resultante:double;
private var posx_resultante:double;

private var alto_real:double;
private var ancho_real:double;


function Start () {

posy_primera=this.GetComponent.<GUITexture>().pixelInset.y;
posx_primera=this.GetComponent.<GUITexture>().pixelInset.x;

alto_fict=this.GetComponent.<GUITexture>().pixelInset.height;
ancho_fict=this.GetComponent.<GUITexture>().pixelInset.width;

posy_resultante=yfinal(posy_primera);
posx_resultante=xfinal(posx_primera);

alto_real=yfinal(alto_fict);
ancho_real=xfinal(ancho_fict);

this.GetComponent.<GUITexture>().pixelInset.y=posy_resultante;
this.GetComponent.<GUITexture>().pixelInset.x=posx_resultante;

this.GetComponent.<GUITexture>().pixelInset.width=ancho_real;
this.GetComponent.<GUITexture>().pixelInset.height=alto_real;






}
//Screen.height(alto)
//0
//
//327.5
//Screen.width(ancho)
//0
//
//580.6

function xfinal(numero:double):double{
var resultado:double;
resultado = numero*Screen.width/580.6;
return resultado;
}


function yfinal(numero:double):double{
var resultado:double;
resultado = numero*Screen.height/327.5;
return resultado;
}



/**
function Update () {

posy_resultante=yfinal(posy_primera);
posx_resultante=xfinal(posx_primera);

alto_real=yfinal(alto_fict);
ancho_real=xfinal(ancho_fict);

this.guiTexture.pixelInset.y=posy_resultante;
this.guiTexture.pixelInset.x=posx_resultante;

this.guiTexture.pixelInset.width=ancho_real;
this.guiTexture.pixelInset.height=alto_real;


}
**/
