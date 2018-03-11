#pragma strict
private var personaje:GameObject;

private  var jugadorx:double;

private  var ratax:double;
private var visto:boolean;
//var target = Quaternion.Euler (1, 0, 0);

private var espera_rotate:float;
private var espera_rotate_max:float;

private var espera_caida:float;
private var espera_caida_max:float;

private var derecha:boolean ;

function Start () {

this.gameObject.name="Malo";

espera_caida_max=30;
espera_caida=0;

espera_rotate_max=4;
espera_rotate=espera_rotate_max+1;
derecha=true;

personaje=GameObject.Find("Personaje");

visto=false;

}

function FixedUpdate () {

if(visto==false)
{
jugadorx=personaje.GetComponent.<Rigidbody>().position.x;

ratax=this.transform.position.x;

if(jugadorx>ratax-15)
{
visto=true;
}
}else{









if(espera_caida<=espera_caida_max)
{
espera_caida++;
if(espera_rotate<=espera_rotate_max)
{
espera_rotate++;
}
else if(derecha){

transform.rotation = Quaternion.Slerp(transform.rotation, Quaternion.Euler (0, 0, 7),Time.deltaTime*20);
derecha=false;
}
else{
transform.rotation = Quaternion.Slerp(transform.rotation, Quaternion.Euler (0, 0, -7),Time.deltaTime*20);
derecha=true;

}
}
else{
transform.rotation = Quaternion.Slerp(transform.rotation, Quaternion.Euler (0, 0, 0),Time.deltaTime*20);
GetComponent.<Rigidbody>().AddForce(Vector3(0,-2000,0));
}
}
}

function OnCollisionEnter(vColisionando :Collision){
var velCol: Vector3 = -1*vColisionando.relativeVelocity;
if(vColisionando.gameObject.name=="Moneda")
{
GetComponent.<Rigidbody>().velocity=velCol;
}
else 
{
UnityEngine.Object.Destroy(this.gameObject);
}
}



