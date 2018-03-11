#pragma strict
var dato:Personaje_definitivo;
function Start () {

}

function Update () {

}

function OnTriggerEnter(per:Collider)
{

if(per.gameObject.name=="Personaje")
{
//print("hecho2");
dato=per.GetComponent(Personaje_definitivo);
dato.cambiarsalto(40);
}
else{
//print("hecho23");
}
}
function OnTriggerExit(per:Collider)
{
if(per.gameObject.name=="Personaje")
{
dato=per.GetComponent(Personaje_definitivo);
dato.cambiarsalto(25);
}
}