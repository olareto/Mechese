#pragma strict

var suelo1:GameObject;
var suelo2:GameObject;

var aux1:Collider;
var aux2:Collider;

function Start () {

}

function Update () {

}
function OnCollisionEnter(vColisionando :Collision){



//var velCol: Vector3 = -1*vColisionando.relativeVelocity;


if(vColisionando.gameObject.name=="Suelo")
{
if(suelo1!=null)
{
suelo1=vColisionando.gameObject;
}
else{
suelo2=vColisionando.gameObject;
}



}
}
function OnTriggerEnter(per:Collider)
{

if(per.gameObject.name=="Personaje")
{
if(suelo1!=null)
{
aux1=suelo1.gameObject.GetComponent(Collider);
aux1.GetComponent.<Collider>().isTrigger=true;

}
else if(suelo2!=null){
aux2=suelo2.gameObject.GetComponent(Collider);
aux2.GetComponent.<Collider>().isTrigger=true;
}

}
}

function OnTriggerExit(per:Collider)
{
if(per.gameObject.name=="Personaje")
{
if(suelo1!=null)
{
aux1.GetComponent.<Collider>().isTrigger=false;
}
else if(suelo2!=null){
aux2.GetComponent.<Collider>().isTrigger=false;
}


}
}





