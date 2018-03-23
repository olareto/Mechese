#pragma strict

var uno:GameObject;
var dos:GameObject;
var tres:GameObject;

private var Primera_parte:boolean;

function Start () {
//camara=GameObject.Find("Camera");
//hecho=false;
Primera_parte=false;

}


function FixedUpdate()
{

if(Input.touchCount > 0)
{
if(Input.GetTouch(0).phase==TouchPhase.Began)
	{
	var touch = Input.GetTouch(0);
if(touch.position.x > this.GetComponent.<GUITexture>().pixelInset.x && touch.position.x < this.GetComponent.<GUITexture>().pixelInset.x + this.GetComponent.<GUITexture>().pixelInset.width &&
   touch.position.y > this.GetComponent.<GUITexture>().pixelInset.y && touch.position.y < this.GetComponent.<GUITexture>().pixelInset.y + this.GetComponent.<GUITexture>().pixelInset.height)
{
	
	
	Primera_parte=true;

}
}



///////77
if (touch.phase == TouchPhase.Ended && Primera_parte==true) {
		
				if(touch.position.x > this.GetComponent.<GUITexture>().pixelInset.x && touch.position.x < this.GetComponent.<GUITexture>().pixelInset.x + this.GetComponent.<GUITexture>().pixelInset.width &&
   			touch.position.y > this.GetComponent.<GUITexture>().pixelInset.y && touch.position.y < this.GetComponent.<GUITexture>().pixelInset.y + this.GetComponent.<GUITexture>().pixelInset.height)
		{
		


var unor:GameObject;
unor=GameObject.Find("uno(Clone)");
var dor:GameObject;
dor=GameObject.Find("dos(Clone)");
var ter:GameObject;
ter=GameObject.Find("tres(Clone)");
if(unor!=null)
{
UnityEngine.Object.Destroy(unor.gameObject);
UnityEngine.Object.Destroy(dor.gameObject);
UnityEngine.Object.Destroy(ter.gameObject);
}
var unoInstance : GameObject;
        unoInstance = Instantiate(uno, this.transform.position, this.transform.rotation);
        unoInstance.GetComponent.<GUITexture>().pixelInset.x=this.GetComponent.<GUITexture>().pixelInset.x-xfinal(69);
        unoInstance.GetComponent.<GUITexture>().pixelInset.y=this.GetComponent.<GUITexture>().pixelInset.y-yfinal(60);
        unoInstance.GetComponent.<GUITexture>().pixelInset.width=xfinal(unoInstance.GetComponent.<GUITexture>().pixelInset.width);
        unoInstance.GetComponent.<GUITexture>().pixelInset.height=yfinal(unoInstance.GetComponent.<GUITexture>().pixelInset.height);
        
var dosInstance : GameObject;
        dosInstance = Instantiate(dos, this.transform.position, this.transform.rotation);
        dosInstance.GetComponent.<GUITexture>().pixelInset.x=this.GetComponent.<GUITexture>().pixelInset.x+xfinal(40);
        dosInstance.GetComponent.<GUITexture>().pixelInset.y=this.GetComponent.<GUITexture>().pixelInset.y-yfinal(60);
        dosInstance.GetComponent.<GUITexture>().pixelInset.width=xfinal(dosInstance.GetComponent.<GUITexture>().pixelInset.width);
        dosInstance.GetComponent.<GUITexture>().pixelInset.height=yfinal(dosInstance.GetComponent.<GUITexture>().pixelInset.height);
        
var tresInstance : GameObject;
        tresInstance = Instantiate(tres, this.transform.position, this.transform.rotation);
        tresInstance.GetComponent.<GUITexture>().pixelInset.x=this.GetComponent.<GUITexture>().pixelInset.x+xfinal(149);
        tresInstance.GetComponent.<GUITexture>().pixelInset.y=this.GetComponent.<GUITexture>().pixelInset.y-yfinal(60);
        tresInstance.GetComponent.<GUITexture>().pixelInset.width=xfinal(tresInstance.GetComponent.<GUITexture>().pixelInset.width);
        tresInstance.GetComponent.<GUITexture>().pixelInset.height=yfinal(tresInstance.GetComponent.<GUITexture>().pixelInset.height);
    





}
else{
Primera_parte=false;
}
		
		
		
		}


////








}
}

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