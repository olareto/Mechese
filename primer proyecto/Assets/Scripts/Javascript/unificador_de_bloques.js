#pragma strict
var bloques:GameObject;
var Dato:BloqueM1N1;
function Start () {
	bloques=GameObject.Find("bloques_total");
    
    Dato=bloques.GetComponent(BloqueM1N1);
}

function Update () {

}

function OnTriggerEnter(per:Collider)
{
if(per.gameObject.name=="Personaje")
{
Dato.tunel();
UnityEngine.Object.Destroy(this.gameObject);


}
}