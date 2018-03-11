#pragma strict
var personaje:GameObject;
var personaje_anim:Animator;
var personaje_code:Personaje_definitivo;
var malo:GameObject;
var malo_anim:Animator;
var espada:GameObject;
var parar:boolean;
var golpe:boolean;
var rotacion_z:int;

var parar1:boolean;

var pulsado:boolean;

var finalizado:boolean;

var mano:GameObject;
var mano_anim:Animator;

var acabado:boolean;

var hub:GameObject;
var vida1:GameObject;
var vida2:GameObject;
var vida3:GameObject;
var vida4:GameObject;
//51.08062
//var animacion_perso:Controller;

function Start () {

finalizado=false;

proseguir();



parar1=false;

pulsado=false;
acabado=false;
rotacion_z=0;




print(Screen.width);
print(Screen.height);


golpetazo();
parar_malo();
parar=false;
golpe=false;
//personaje_anim.animation.active=false;
//personaje_anim.SetBool("anim",true);


//personaje.rigidbody.velocity.x=10;
}

function FixedUpdate () {

/**
if(Input.GetKey(KeyCode.Space)){

	if(pulsado==false){
	
	personaje_anim.SetBool("resu",true);
	
	resurreccion();
	

	
	
	}
}else{
	pulsado=false;
}

**/




if (parar==true) 
{


//malo.transform.localScale.x=-1*(malo.transform.localScale.x);
malo_anim.SetBool("anim",true);


malo.GetComponent.<Rigidbody>().velocity.x=0;
parar1=true;
//parar=false;
}
else{
malo.GetComponent.<Rigidbody>().velocity.x=30;
malo_anim.SetBool("anim",false);
}
if (finalizado==false) {
if (golpe==true) 
{
//malo.transform.localScale.x=-1*(malo.transform.localScale.x);
if (parar1==false) 
{

personaje_anim.SetBool("anim",true);
}
parar1=true;
//personaje_anim.SetBool("anim",true);

personaje.GetComponent.<Rigidbody>().velocity.x=0;
}
else{
personaje.GetComponent.<Rigidbody>().velocity.x=10;

}
}
}


function parar_malo()
{
yield WaitForSeconds(1.9);
parar=true;

}




function golpetazo()
{
yield WaitForSeconds(1);
//espada.transform.position.x=-109.9783;
espada.transform.position.x=37;
espada.transform.position.y=4.247711;

espada.GetComponent.<Rigidbody>().velocity.x=11;
espada.GetComponent.<Rigidbody>().velocity.y=5;
golpe=true;
espada_rotacion();

yield WaitForSeconds(0.18);
espada.GetComponent.<Rigidbody>().velocity.y=16;
yield WaitForSeconds(0.18);
espada.GetComponent.<Rigidbody>().velocity.y=12;
yield WaitForSeconds(0.18);
espada.GetComponent.<Rigidbody>().velocity.y=8;
yield WaitForSeconds(0.18);
espada.GetComponent.<Rigidbody>().velocity.y=4;
yield WaitForSeconds(0.18);
espada.GetComponent.<Rigidbody>().velocity.y=0;


yield WaitForSeconds(0.18);
espada.GetComponent.<Rigidbody>().velocity.y=-4;
yield WaitForSeconds(0.18);
espada.GetComponent.<Rigidbody>().velocity.y=-8;
yield WaitForSeconds(0.18);
espada.GetComponent.<Rigidbody>().velocity.y=-12;
yield WaitForSeconds(0.18);
espada.GetComponent.<Rigidbody>().velocity.y=-16;
yield WaitForSeconds(0.18);
espada.GetComponent.<Rigidbody>().velocity.y=0;
espada.GetComponent.<Rigidbody>().velocity.x=0;

UnityEngine.Object.Destroy(espada.gameObject);

mano_anim.SetBool("cogido",true);

}

function espada_rotacion()
{


while(rotacion_z<120)
{
yield WaitForSeconds(0.001);
//espada.transform.Rotate(Vector3(0,0,rotacion_z));
if(espada!=null)
{
espada.transform.Rotate(Vector3(0,0,20));
}
rotacion_z=rotacion_z+1;
}
}

function resurreccion()
{
	
yield WaitForSeconds(0.09);
personaje.GetComponent.<Rigidbody>().velocity.y=16;
yield WaitForSeconds(0.09);
personaje.GetComponent.<Rigidbody>().velocity.y=12;
yield WaitForSeconds(0.09);
personaje.GetComponent.<Rigidbody>().velocity.y=8;
yield WaitForSeconds(0.09);
personaje.GetComponent.<Rigidbody>().velocity.y=4;
yield WaitForSeconds(0.09);
personaje.GetComponent.<Rigidbody>().velocity.y=0;


yield WaitForSeconds(0.09);
personaje.GetComponent.<Rigidbody>().velocity.y=-4;
yield WaitForSeconds(0.09);
personaje.GetComponent.<Rigidbody>().velocity.y=-8;
yield WaitForSeconds(0.09);
personaje.GetComponent.<Rigidbody>().velocity.y=-12;
yield WaitForSeconds(0.09);
personaje.GetComponent.<Rigidbody>().velocity.y=-16;
yield WaitForSeconds(0.09);
personaje.GetComponent.<Rigidbody>().velocity.y=0;

personaje_anim.SetBool("anim",false);

personaje_code.intro=false;

//UnityEngine.Object.Destroy(this.gameObject);

finalizado=true;

volver_hub();

}
function proseguir()
{
yield WaitForSeconds(3.5);

parar=false;

yield WaitForSeconds(1);
personaje_anim.SetBool("resu",true);
resurreccion();



}





function volver_hub()
{
var posicion_final2:double=0;
var posicion_final:double=13.56;

//var aux:int=10;


for(var e:int=40 ; e>=0;e--)
{


yield WaitForSeconds(0.01);

hub.transform.position.y=e*1/1000;

vida1.transform.position.y=posicion_final+e*5/10;
vida2.transform.position.y=posicion_final+e*5/10;
vida3.transform.position.y=posicion_final+e*5/10;
vida4.transform.position.y=posicion_final+e*5/10;

}

/**
yield WaitForSeconds(0.09);

hub.transform.position.y=10;

vida1.transform.position.y=posicion_final+10;
vida2.transform.position.y=posicion_final+10;
vida3.transform.position.y=posicion_final+10;
vida4.transform.position.y=posicion_final+10;

yield WaitForSeconds(0.09);

hub.transform.position.y=9;

vida1.transform.position.y=posicion_final+9;
vida2.transform.position.y=posicion_final+9;
vida3.transform.position.y=posicion_final+9;
vida4.transform.position.y=posicion_final+9;

yield WaitForSeconds(0.09);

hub.transform.position.y=0;

vida1.transform.position.y=posicion_final+8;
vida2.transform.position.y=posicion_final+8;
vida3.transform.position.y=posicion_final+8;
vida4.transform.position.y=posicion_final+8;

yield WaitForSeconds(0.09);

hub.transform.position.y=0;

vida1.transform.position.y=posicion_final+7;
vida2.transform.position.y=posicion_final+7;
vida3.transform.position.y=posicion_final+7;
vida4.transform.position.y=posicion_final+7;

yield WaitForSeconds(0.09);

hub.transform.position.y=0;

vida1.transform.position.y=posicion_final+6;
vida2.transform.position.y=posicion_final+6;
vida3.transform.position.y=posicion_final+6;
vida4.transform.position.y=posicion_final+6;

yield WaitForSeconds(0.09);

hub.transform.position.y=0;

vida1.transform.position.y=posicion_final+10;
vida2.transform.position.y=posicion_final+10;
vida3.transform.position.y=posicion_final+10;
vida4.transform.position.y=posicion_final+10;

yield WaitForSeconds(0.09);

hub.transform.position.y=0;

vida1.transform.position.y=posicion_final+10;
vida2.transform.position.y=posicion_final+10;
vida3.transform.position.y=posicion_final+10;
vida4.transform.position.y=posicion_final+10;

yield WaitForSeconds(0.09);

hub.transform.position.y=0;

vida1.transform.position.y=posicion_final+10;
vida2.transform.position.y=posicion_final+10;
vida3.transform.position.y=posicion_final+10;
vida4.transform.position.y=posicion_final+10;

yield WaitForSeconds(0.09);

hub.transform.position.y=0;

vida1.transform.position.y=posicion_final+10;
vida2.transform.position.y=posicion_final+10;
vida3.transform.position.y=posicion_final+10;
vida4.transform.position.y=posicion_final+10;

yield WaitForSeconds(0.09);

hub.transform.position.y=0;

vida1.transform.position.y=posicion_final+10;
vida2.transform.position.y=posicion_final+10;
vida3.transform.position.y=posicion_final+10;
vida4.transform.position.y=posicion_final+10;
**/

}















/**
yield WaitForSeconds(0.1);

espada.transform.Rotate(Vector3(0,0,rotacion_z));
rotacion_z=rotacion_z+10;

yield WaitForSeconds(0.1);

espada.transform.Rotate(Vector3(0,0,rotacion_z));
rotacion_z=rotacion_z+10;

yield WaitForSeconds(0.1);

espada.transform.Rotate(Vector3(0,0,rotacion_z));
rotacion_z=rotacion_z+10;

yield WaitForSeconds(0.1);

espada.transform.Rotate(Vector3(0,0,rotacion_z));
rotacion_z=rotacion_z+10;

yield WaitForSeconds(0.1);

espada.transform.Rotate(Vector3(0,0,rotacion_z));
rotacion_z=rotacion_z+10;

yield WaitForSeconds(0.1);

espada.transform.Rotate(Vector3(0,0,rotacion_z));
rotacion_z=rotacion_z+10;

yield WaitForSeconds(0.1);

espada.transform.Rotate(Vector3(0,0,rotacion_z));
rotacion_z=rotacion_z+10;

yield WaitForSeconds(0.1);

espada.transform.Rotate(Vector3(0,0,rotacion_z));
rotacion_z=rotacion_z+10;
**/





