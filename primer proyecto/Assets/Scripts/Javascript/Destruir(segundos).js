#pragma strict

var espera:float;

var espera_max:float;
function Start () {
espera=0;
/**
if(espera_max==0)
{
espera_max=15;
}
**/
//rigidbody.velocity.x=7.5;
//rigidbody.velocity.y=5;
}

function Update () {

if(espera<espera_max)
{
espera++;
}
else{
UnityEngine.Object.Destroy(this.gameObject);

}


}