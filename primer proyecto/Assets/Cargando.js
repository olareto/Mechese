#pragma strict

var imagenes :Texture[];
var espera:int;
var espera_max:int;
var numero:int;
function Start () {

numero=0;
espera=0;
espera_max=5;
}

function Update () {
if(espera<espera_max)
{
espera++;
}
else{
espera=0;
numero++;
if(numero==7)
{
numero=0;
}

this.GetComponent.<GUITexture>().texture=imagenes[numero];

}
//this.guiTexture.texture=imagenes[1];
}