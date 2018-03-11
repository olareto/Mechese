#pragma strict
private var espera:float;
private var espera_max:float;
private var espera_destruccion:float;
private var espera_destruccion_max:float;
private var yinicial:double;
var rotacion:float;

function Start () {
espada_rotacion();
rotacion= 20;
yinicial=transform.position.y;
espera_max=70;
espera=0;

espera_destruccion_max=70;
espera_destruccion=0;

this.gameObject.name="Malo";
//transform.rotation = Quaternion(0,0,1,rotacion);

}
//-0.94
function FixedUpdate () {

//transform.Rotate(Vector3.right * Time.deltaTime, Space.World);
//transform.Rotate(0,  Time.deltaTime, 0, Space.World);
//transform.Rotate(Vector3.up * Time.deltaTime, Space.World);
//transform.rotation = Quaternion(0,0,1,rotacion);
//rotacion=rotacion+10;
if(espera<=espera_max)
{
espera++;
}
else{
if(espera_destruccion<=espera_destruccion_max)
{
espera_destruccion++;
}
else{
UnityEngine.Object.Destroy(this.gameObject);

}

transform.position.y=yinicial-2;

GetComponent.<Rigidbody>().velocity.x=50;
}

}
function espada_rotacion()
{


while(true)
{
yield WaitForSeconds(0.001);
//espada.transform.Rotate(Vector3(0,0,rotacion_z));

this.transform.Rotate(Vector3(0,0,20));

//rotacion_z=rotacion_z+1;
}
}
function OnCollisionEnter(vColisionando :Collision){
var velCol: Vector3 = -1*vColisionando.relativeVelocity;
if(vColisionando.gameObject.name=="Moneda")
{
GetComponent.<Rigidbody>().velocity=velCol;
}
else if(vColisionando.gameObject.name=="Personaje")
{
if(espera<=espera_max)
{
GetComponent.<Rigidbody>().velocity.x=0;

}
else{
GetComponent.<Rigidbody>().velocity.x=50;

}

}
}