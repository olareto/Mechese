#pragma strict
var AguaPrefab:Rigidbody;
private var espera_ataque:double;
private var espera_ataque_max:double;

private var espera_trans:double;
private var espera_trans_max:double;

private var tocado:boolean;

var Malo:GameObject;
var Malo_codigo:Jefe_1;


function Start () {

Malo=GameObject.Find("jefe_1");

Malo_codigo=Malo.GetComponent(Jefe_1);

espera_trans=0;
espera_trans_max=20;

tocado=false;
	espera_ataque_max=2;
    espera_ataque=espera_ataque_max;
}

function FixedUpdate () {

if(espera_trans<espera_trans_max)
{
espera_trans++;
}
else{
this.GetComponent.<Collider>().isTrigger=false;

}



if(tocado==true)
{


if(espera_ataque<espera_ataque_max)
{
espera_ataque++;
}
else{
espera_ataque=0;
lanzarAgua();
}
}



}
function OnTriggerEnter(per:Collider)
{
if(per.gameObject.name=="Personaje"  && tocado==false)
{


Malo_codigo.tocado(false);
}
}


function OnCollisionEnter(per:Collision)
{
espera_trans=0;
var velCol: Vector3 = per.relativeVelocity;
if(per.gameObject.name=="Personaje")
{
this.GetComponent.<Collider>().isTrigger=true;
if(velCol.y<-1)
{
//per.saltos=2;
per.rigidbody.AddForce(Vector3(0,20*2500,0));
tocado=true;


Malo_codigo.tocado(true);
}
else{
Malo_codigo.tocado(false);



}
}
else if(per.gameObject.name=="jefe_1")
{
per.rigidbody.velocity=velCol;
this.GetComponent.<Collider>().isTrigger=true;


}
}





function lanzarAgua()
{

var AguaInstance : Rigidbody;
        AguaInstance = Instantiate(AguaPrefab,Vector3(this.transform.position.x-2,-2.53967,0),this.transform.rotation);
        //AguaInstance = Instantiate(AguaPrefab,Vector3(67.09927,-3.84501,0),this.transform.rotation);
        //AguaInstance = Instantiate(AguaPrefab, this.transform.position+Vector3(-5,2,0), this.transform.rotation);
        //AguaInstance.velocity.x=12;
        //AguaInstance.rigidbody.velocity=Vector3(8,1.5,0);
                AguaInstance.GetComponent.<Rigidbody>().velocity=Vector3(64,4,0);

        //AguaInstance.position.z=0;
}