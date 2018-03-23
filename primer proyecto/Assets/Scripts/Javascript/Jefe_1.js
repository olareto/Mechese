#pragma strict
var PeriodicoPrefab:Rigidbody;
var BombaPrefab:Rigidbody;
var EspadaPrefab:Rigidbody;
var tuberiaPrefab:GameObject;
var MojadoPrefab:GameObject;


private var personaje:GameObject;
var personaje_code:Personaje_definitivo;
private var diferencia:double;
private var zinicial:double;
private var yinicial:double;
private var personajeey:double;
private var espera_ataque:double;
private var espera_ataque_max:double;
var alejarse:int;
var espera_embestida:double;
var espera_embestida_max:double;


var termina_patron:boolean;
var una_vez:boolean;

 var patron:double;
 var numero_patron:double;

 var Brazo:GameObject;
 var Mochila:GameObject;

 var Brazo_anim:Animator;
 var Mochila_anim:Animator;

 var embiste:boolean;

var vidas:int;




//private var espera_danyo:float;
//private var espera_danyo_max:float;

function Start () {
vidas=3;

Brazo=GameObject.Find("brazos");
Mochila=GameObject.Find("Mochila");

Brazo_anim=Brazo.GetComponent(Animator);
Mochila_anim=Mochila.GetComponent(Animator);


	alejarse=0;
    espera_embestida=0;
    espera_embestida_max=240;

    una_vez=false;
	termina_patron=false;
	patron=1;
	numero_patron=1;
	embiste=false;
    //espera_danyo_max=30;
    //espera_danyo=espera_danyo_max+1;

    yinicial= transform.position.y;
    zinicial= transform.position.z;

	personaje=GameObject.Find("Personaje");
	personaje_code=personaje.GetComponent(Personaje_definitivo);


//personaje_code.acabado_jefe();

	personajeey=personaje.GetComponent.<Rigidbody>().position.y;
	diferencia=transform.position.x-personaje.GetComponent.<Rigidbody>().position.x;
	espera_ataque_max=120;
    espera_ataque=0;
}

function FixedUpdate () {
if(gameObject.GetComponent.<Collider>().isTrigger==true)
{
normal();
}
    //this.transform.position.x=personaje.rigidbody.position.x+diferencia;


if(embiste==true)
{
        //rigidbody.velocity.x=-35;
}

else{

    //this.transform.position.x=personaje.rigidbody.position.x+diferencia;
 	//transform.position = Vector3.Lerp(transform.position,Vector3(personaje.rigidbody.position.x+diferencia,yinicial,zinicial), 100 * Time.deltaTime);
	//transform.position.x = personaje.rigidbody.position.x+diferencia;
	this.transform.position.x=personaje.GetComponent.<Rigidbody>().position.x+diferencia;
}


if(termina_patron==false)
{

    //this.transform.position.x=personaje.rigidbody.position.x+diferencia;

/////////////////////
if(espera_ataque<=espera_ataque_max)
{
espera_ataque++;
}
else
{
//espera_ataque=0;
this.ataque_ninyo(patron,numero_patron);
this.sumar_patron();

}


//this.lanzarPeriodico();
//espera_ataque=0;
//this.lanzarBomba();



////////////77



una_vez=false;

}
else{
if(una_vez==false)
{
var tuberiaInstance : GameObject;
        tuberiaInstance = Instantiate(tuberiaPrefab, Vector3(this.transform.position.x+103,-2.55,0), this.transform.rotation);
   una_vez=true;
   embestida();
   embiste=true;
       }    

//embestida();
/**
if(espera_embestida>espera_embestida_max)
{
embiste=true;
alejarse=0;
this.transform.position.x=personaje.rigidbody.position.x+diferencia;

}
else{
espera_embestida++;
 if(espera_embestida<120)
 {
  alejarse++;

 }
 else{
  alejarse--;

 }

}

 
this.transform.position.x=personaje.rigidbody.position.x+diferencia+alejarse;

**/



}
}
function normal(){
yield WaitForSeconds(3);
gameObject.GetComponent.<Collider>().isTrigger=false;
}

function embestida()
{
GetComponent.<Rigidbody>().velocity.x=60;
yield WaitForSeconds(3);
Brazo_anim.SetBool("atacando",true);
Brazo_false();
this.transform.localScale.x=this.transform.localScale.x*(-1);
GetComponent.<Rigidbody>().velocity.x=-35;

}


function sumar_patron()
{
this.numero_patron++;
switch (patron)
{
case 1:
if(numero_patron>6)
{
numero_patron=1;
termina_patron=true;
}
break;
case 2:
if(numero_patron>11)
{
numero_patron=1;
termina_patron=true;

}
break;
case 3:
if(numero_patron>24)
{
numero_patron=1;
termina_patron=true;
}
break;
}
}


function ataque_ninyo(patron:double,numero_patron:double )
{
/**
patron   num patron
1			periodicox3 bombasx3 embestida se ataca 

2			periodicox5 bombasx6 embestida se ataca 

3			periodicox3 bombasx3 embestida se ataca 
**/

switch (patron)
{

case 1:
if(numero_patron<4)
{
espera_ataque=0;
this.lanzarPeriodico();
}
else{
espera_ataque=55;
this.lanzarBomba();

}

break;

case 2:
if(numero_patron<6)
{
espera_ataque=0;
this.lanzarPeriodico();
}
else{
espera_ataque=55;
this.lanzarBomba();

}
break;

case 3:
if(numero_patron<3||(numero_patron>11&&numero_patron<17)||(numero_patron>19&&numero_patron<25))
{
espera_ataque=0;
this.lanzarPeriodico();
}
else{
espera_ataque=55;
this.lanzarBomba();

}
break;

}


}
function Brazo_false(){
yield WaitForSeconds(1);
Brazo_anim.SetBool("atacando",false);
}
function Mochila_false(){
yield WaitForSeconds(0.5);
Mochila_anim.SetBool("atacando",false);
}
function lanzarPeriodico()
{

Mochila_anim.SetBool("atacando",true);
Mochila_false();
var PeriodicoInstance : Rigidbody;
        PeriodicoInstance = Instantiate(PeriodicoPrefab, this.transform.position+Vector3(-5,2,0), this.transform.rotation);
        //cartaInstance.AddForce(Vector3(-1*velocidad,-1*velocidad,0) * 5000);
        //cartaInstance.transform.rotation = Quaternion.Euler (0, 0, 35);
        PeriodicoInstance.GetComponent.<Rigidbody>().velocity.x=-5;
}
function lanzarBomba()
{
Mochila_anim.SetBool("atacando",true);
Mochila_false();
var BombaInstance : Rigidbody;
        BombaInstance = Instantiate(BombaPrefab, this.transform.position+Vector3(-6,5,0), this.transform.rotation);
        //cartaInstance.AddForce(Vector3(-1*velocidad,-1*velocidad,0) * 5000);
        //cartaInstance.transform.rotation = Quaternion.Euler (0, 0, 35);
}

function volver()
{


transform.position.y=1000;
this.transform.localScale.x=this.transform.localScale.x*(-1);
yield WaitForSeconds(3);
transform.position.y=yinicial;
//rigidbody.velocity.x=-20;
GetComponent.<Rigidbody>().velocity.x=25; 
for(var e:int=0;e<101 ;e++)
{
yield WaitForSeconds(0.01);

transform.position.x = personaje.GetComponent.<Rigidbody>().position.x + diferencia + (50-e*0.5);

}
GetComponent.<Rigidbody>().velocity.x=0; 
termina_patron=false;
embiste=false;
//posicion_buena= personaje.rigidbody.position.x + diferencia;
//diferencia=transform.position.x-personaje.rigidbody.position.x;


}
function tocado(golpeado:boolean)
{
if(golpeado==true)
{
vidas--;




//Brazo.S
//Mochila
//SpriteRenderer.sprite=null;
//Vector3(this.transform.position.x+100,-2.55,0)
//MojadoPrefab
var MojadoInstance : GameObject;
        MojadoInstance = Instantiate(MojadoPrefab,this.transform.position , this.transform.rotation);
volver();

}
else{
yield WaitForSeconds(4);

volver();



}

comprobar_vida();

}
function comprobar_vida()
{
switch(vidas)
{
case 3:
patron=1;
numero_patron=1;
//
break;
case 2:
patron=2;
numero_patron=1;
//
break;
case 1:
patron=3;
numero_patron=1;
//
break;
case 0:
acabado_jefe();
this.transform.position.y=100;
//UnityEngine.Object.Destroy(this.gameObject);
//muerte
break;

}
}
function acabado_jefe(){

yield WaitForSeconds(2);

personaje_code.meta=true;
UnityEngine.Object.Destroy(this.gameObject);




}