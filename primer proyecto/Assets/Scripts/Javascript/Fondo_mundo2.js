#pragma strict
var nombre:String;
var numero:int;
var personaje:GameObject;
function Start () {
personaje=GameObject.Find("Personaje");
nombre=this.gameObject.name;
if(nombre=="Fondo1")
{
numero=1;
}
else if(nombre=="Fondo2")
{
numero=2;
}
else if(nombre=="Fondo3")
{
numero=3;
}

/**

28.53047
20.2214


VelocidadX= 24.13228

/////////////////1

0

/////////////////2

15

/////////////////3

24


VelocidadX= 0

/////////////////1

24.13228

/////////////////2

9.13228

/////////////////3

1.13228


**/
switch(numero)
{
case 1:
//rigidbody.velocity.x=-personaje.rigidbody.velocity.x+24.13228;

break;
case 2:

//rigidbody.velocity.x=-personaje.rigidbody.velocity.x+24.13228+15;
GetComponent.<Rigidbody>().velocity.x=(personaje.GetComponent.<Rigidbody>().velocity.x/24.13228)*15;
//15
//24.13228

break;
case 3:
//rigidbody.velocity.x=-personaje.rigidbody.velocity.x+24.13228+23;
GetComponent.<Rigidbody>().velocity.x=(personaje.GetComponent.<Rigidbody>().velocity.x/24.13228)*23;
//1.13228
break;
}





}




function FixedUpdate () {
mover(personaje.GetComponent.<Rigidbody>().velocity.x);
}
function mover(velocidad:double)
{
switch(numero)
{

case 2:
GetComponent.<Rigidbody>().velocity.x=(personaje.GetComponent.<Rigidbody>().velocity.x/24.13228)*15;

break;
case 3:
GetComponent.<Rigidbody>().velocity.x=(personaje.GetComponent.<Rigidbody>().velocity.x/24.13228)*23;
break;
}
}