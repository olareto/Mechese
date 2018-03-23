public var nombre_escena:String;

var cargando:GameObject;
//var hecho:boolean;
//var camara:GameObject;
var pulsado:Texture;
var boton:boolean;
private var Primera_parte:boolean;

var sin_pulsar:Texture;

function Start () {
//camara=GameObject.Find("Camera");
//hecho=false;
Primera_parte=false;

}





function Update () {

	
	
for (var touch : Touch in Input.touches) {
	if (touch.phase == TouchPhase.Began) {
        
        
        
		if(touch.position.x > this.GetComponent.<GUITexture>().pixelInset.x && touch.position.x < this.GetComponent.<GUITexture>().pixelInset.x + this.GetComponent.<GUITexture>().pixelInset.width &&
   			touch.position.y > this.GetComponent.<GUITexture>().pixelInset.y && touch.position.y < this.GetComponent.<GUITexture>().pixelInset.y + this.GetComponent.<GUITexture>().pixelInset.height)
		{
		//if(hecho==false)
		//{
		//hecho=true;
		////

        //////
        if(boton==true)
        {
        this.GetComponent.<GUITexture>().texture=pulsado;
        }
        
		//this.transportar();
	//}
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
        var cartaInstance : GameObject;
        cartaInstance = Instantiate(cargando,Vector3(0,0,0), this.transform.rotation);
        
		this.transportar();
	
//this.guiTexture.pixelInset.x;
}
else{
Primera_parte=false;
this.GetComponent.<GUITexture>().texture=sin_pulsar;
}
		
		
		
		}
	
	
	
	}
	/**
	if(Input.touchCount > 0){
        for (var i = 0; i < Input.touchCount; ++i) {   
            if(this.guiTexture.HitTest(Input.GetTouch(i).position))
            {
            this.transportar();	                     
            }           
        } 
	**/
}












function volver()
{
yield WaitForSeconds(0.1);
this.GetComponent.<GUITexture>().texture=sin_pulsar;
}
function transportar()
{
if(nombre_escena!="cierre")
{
Application.LoadLevel(nombre_escena);
}
else{
Application.Quit();
}
}
