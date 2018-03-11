#pragma strict


var confeti1:GameObject;
var confeti2:GameObject;
var confeti3:GameObject;
var confeti4:GameObject;

var pantalla_negra:GUITexture;
var felicidades:GUITexture;
var volver_al_menu:GUITexture;

var unaVez:boolean;

private var personaje:GameObject;
private var personaje_code:Personaje_definitivo;
private var diferencia:double;
private var zinicial:double;
private var yinicial:double;
private var personajeey:double;
private var cambio:boolean;
private var cambio1:double;
private var cambio2:double;
private var diferenciaY:double;
private var posicion_y:double;
private var arriba:boolean;

function Start () {

unaVez=false;

arriba=true;
	cambio1=15;
	cambio2=4;
	cambio=false;
    yinicial= transform.position.y;
    zinicial= transform.position.z;
	personaje=GameObject.Find("Personaje");
    personajeey = personaje.GetComponent.<Rigidbody2D>().position.y;
    diferencia = transform.position.x - personaje.GetComponent.<Rigidbody2D>().position.x;
    diferenciaY = transform.position.y - personaje.GetComponent.<Rigidbody2D>().position.y;
	
personaje_code=personaje.GetComponent(Personaje_definitivo);

}

function FixedUpdate () {


if(personaje_code.meta==false && personaje_code.vivo==true)
{
if(cambio==true)
{
if(arriba==true)
{
    transform.position = Vector3.Lerp(transform.position, Vector3(personaje.GetComponent.<Rigidbody2D>().position.x+diferencia,posicion_y,zinicial),4*Time.deltaTime);

}
else{
    transform.position = Vector3.Lerp(transform.position, Vector3(personaje.GetComponent.<Rigidbody2D>().position.x+diferencia,posicion_y,zinicial),6*Time.deltaTime);

}


//transform.position = Vector3.Lerp(transform.position,Vector3(personaje.rigidbody.position.x+diferencia,posicion_y,zinicial),4*Time.deltaTime);

//transform.position = Vector3.Lerp(transform.position,Vector3(personaje.rigidbody.position.x+diferencia,personaje.rigidbody.position.y+diferenciaY,zinicial),5*Time.deltaTime);
//this.cambio_y3(personaje.rigidbody.position.x,personaje.rigidbody.position.y);
}
else
{
    transform.position = Vector3.Lerp(transform.position, Vector3(personaje.GetComponent.<Rigidbody2D>().position.x+diferencia,yinicial,zinicial),6*Time.deltaTime);

//transform.position = Vector3.Lerp(transform.position,Vector3(personaje.rigidbody.position.x+diferencia,yinicial,zinicial),4*Time.deltaTime);
}
transform.position.x = personaje.GetComponent.<Rigidbody2D>().position.x+diferencia;
	
	
}
else if(personaje_code.meta==true)
{
//crear_confeti();


////////////////77

//pantalla_negra:GUITexture;
//felicidades:GUITexture;
//volver_al_menu:GUITexture;


if(unaVez==false){
crear_confeti();
	unaVez=true;
	//audio_risa=gameoverdibujo.GetComponent(AudioSource);
	//audio_risa.Play();
}

//pantalla_negra.guiTexture.pixelInset.y=yfinal(63.3);



if(felicidades.GetComponent.<GUITexture>().pixelInset.y>yfinal(244.8))
{
felicidades.GetComponent.<GUITexture>().pixelInset.y=felicidades.GetComponent.<GUITexture>().pixelInset.y-20;
}


else{

volver_al_menu.GetComponent.<GUITexture>().pixelInset.y=yfinal(54.92);
//reintentar.guiTexture.pixelInset.y=-0.4;
}






///////////////////


}

}

public function Setposicion_y(nuevo:double,arriba1:boolean)
{
this.arriba=arriba1;
this.posicion_y=nuevo;
}

public function SetCambio(nuevo:boolean)
{
this.cambio=nuevo;
}

private function cambio_y3(posicionx:double,posiciony:double):void
{

	if(posiciony > personajeey && posiciony < personajeey+10)
	{
			 transform.position = Vector3.Lerp(transform.position,Vector3(posicionx+diferencia,yinicial,zinicial),cambio2*Time.deltaTime);
	}
	else if(posiciony>10.5+personajeey&&posiciony<20+personajeey)
	{
			 transform.position = Vector3.Lerp(transform.position,Vector3(posicionx+diferencia,10+yinicial,zinicial),cambio2*Time.deltaTime);
	}
	else if(posiciony>20.5+personajeey&&posiciony<30+personajeey)
	{
			 transform.position = Vector3.Lerp(transform.position,Vector3(posicionx+diferencia,20+yinicial,zinicial),cambio2*Time.deltaTime);
	}
	else if(posiciony>30.5+personajeey&&posiciony<40+personajeey)
	{
			 transform.position = Vector3.Lerp(transform.position,Vector3(posicionx+diferencia,30+yinicial,zinicial),cambio2*Time.deltaTime);
	}
	else{
				 transform.position = Vector3.Lerp(transform.position,Vector3(posicionx+diferencia,yinicial,zinicial),cambio2*Time.deltaTime);
	}
	
}
function crear_confeti()
{
var confetiinstance : GameObject;
//20;
//camara.x-18


while(true)
{
yield WaitForSeconds(0.1);
var aux:int=Random.Range(1,5);
var aux2:int=Random.Range(0,101);

switch(aux)
{
case 1:
//var confetiinstance : GameObject;
      confetiinstance = Instantiate(confeti1, this.transform.position+Vector3(-16 +40*aux2/100,11,11), this.transform.rotation);

break;
case 2:
//var confetiinstance : GameObject;
      confetiinstance = Instantiate(confeti2, this.transform.position+Vector3(-16 +40*aux2/100,11,11), this.transform.rotation);
break;
case 3:
//var confetiinstance : GameObject;
      confetiinstance = Instantiate(confeti3, this.transform.position+Vector3(-16 +40*aux2/100,11,11), this.transform.rotation);
break;
case 4:
//var confetiinstance : GameObject;
      confetiinstance = Instantiate(confeti4, this.transform.position+Vector3(-16 +40*aux2/100,11,11), this.transform.rotation);
break;
}
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
