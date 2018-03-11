#pragma strict
//Estamos en la camara
	var juan:Touch;
public var imagen_numero:GUITexture[];


function Update () {
	if(Input.touchCount > 0)
	{
	if(Input.GetTouch(0).phase==TouchPhase.Began)
	{
var touch = Input.GetTouch(0);
for (var boton : GUITexture in imagen_numero) {
if(touch.position.x > boton.GetComponent.<GUITexture>().pixelInset.x && touch.position.x < boton.GetComponent.<GUITexture>().pixelInset.x + boton.GetComponent.<GUITexture>().pixelInset.width &&
   touch.position.y > boton.GetComponent.<GUITexture>().pixelInset.y && touch.position.y < boton.GetComponent.<GUITexture>().pixelInset.y + boton.GetComponent.<GUITexture>().pixelInset.height)
{
//var attras:cambiar_escena;
//attras=boton.GetComponent(cambiar_escena);
//attras.haceralgo();
//boton.guiTexture.pixelInset.x;
}
else{

}

		
		}
	}
	}
}

/**
function Update () {
	if(Input.touchCount>=1)
	{
		//juan=Input.GetTouch(0);
		//codigo de cuando hacemos Input.space
	}
}
**/