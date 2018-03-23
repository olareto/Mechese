#pragma strict

private var menu_principal:GameObject;
private var menu_principal_code:Menu_principal;

var adonde:int;

private var Primera_parte:boolean;

//var camara:GameObject;
var pulsado:Texture;
var sin_pulsar:Texture;
var boton:boolean;


function Start () {

menu_principal=GameObject.Find("Menu_principal");
menu_principal_code=menu_principal.GetComponent(Menu_principal);



Primera_parte=false;
//camara=GameObject.Find("Camera");

}


function Update () {


if(Input.GetKey(KeyCode.Space))
{
transportar();
}



for (var touch : Touch in Input.touches) {
	if (touch.phase == TouchPhase.Began) {
        
        
        
		if(touch.position.x > this.GetComponent.<GUITexture>().pixelInset.x && touch.position.x < this.GetComponent.<GUITexture>().pixelInset.x + this.GetComponent.<GUITexture>().pixelInset.width &&
   			touch.position.y > this.GetComponent.<GUITexture>().pixelInset.y && touch.position.y < this.GetComponent.<GUITexture>().pixelInset.y + this.GetComponent.<GUITexture>().pixelInset.height)
		{
		Primera_parte=true;
		
		
		
        if(boton==true)
        {
        this.GetComponent.<GUITexture>().texture=pulsado;
        }
        
		//this.transportar();
	
//this.guiTexture.pixelInset.x;
}


		
		
	}
		if (touch.phase == TouchPhase.Ended && Primera_parte==true) {
		
				if(touch.position.x > this.GetComponent.<GUITexture>().pixelInset.x && touch.position.x < this.GetComponent.<GUITexture>().pixelInset.x + this.GetComponent.<GUITexture>().pixelInset.width &&
   			touch.position.y > this.GetComponent.<GUITexture>().pixelInset.y && touch.position.y < this.GetComponent.<GUITexture>().pixelInset.y + this.GetComponent.<GUITexture>().pixelInset.height)
		{
		
	
        if(boton==true)
        {
        //this.guiTexture.texture=pulsado;
        volver();
        }
        
		this.transportar();
	
//this.guiTexture.pixelInset.x;
}
else{
Primera_parte=false;
this.GetComponent.<GUITexture>().texture=sin_pulsar;
}
		
		
		
		}
	
	
	
	}


}
function transportar()
{

menu_principal_code.transportar(adonde);



}
function volver()
{
yield WaitForSeconds(0.1);
this.GetComponent.<GUITexture>().texture=sin_pulsar;
}
