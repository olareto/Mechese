#pragma strict
var PeriodicoPrefab:GameObject;

//var trozo:GameObject[];

var malo:GameObject;
var malo_codido:Fondo_Malo;


var nombre:String;

//var primerax:double;//-12.15268
//var primeray:double;//-4.652493

//var prefabs:GameObject[];

//var numero_prefab:int;

function Start () {
malo=GameObject.Find("FondoTotal");
malo_codido=malo.GetComponent(Fondo_Malo);

//primerax=-12.15268;
//primeray=-4.652493;
//prefabs= new GameObject[2];
//numero_prefab=0;
}

function Update () {


}
function OnTriggerEnter(per:Collider)
{
if(per.gameObject.name=="Personaje")
{

if(nombre=="Suelo")
{


var PeriodicoInstance : GameObject;
        PeriodicoInstance = Instantiate(PeriodicoPrefab, this.transform.position+Vector3(203.56188,-24.902346,0), this.transform.rotation);
UnityEngine.Object.Destroy(this.gameObject);
}
else{
malo_codido.mastrozo();
UnityEngine.Object.Destroy(this.gameObject);



/**
var trozo_1num:int;

trozo_1num=Random.Range(0, 5.9);

primerax=(primerax+118.305);
prefabs[0] = Instantiate(trozo[trozo_1num],Vector3(primerax,primeray,0), this.transform.rotation);
if(numero_prefab==0)
{
numero_prefab=1;
}
else{
numero_prefab=0;
}
UnityEngine.Object.Destroy(this.gameObject);
**/
}
}

}