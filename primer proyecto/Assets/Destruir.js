#pragma strict
var espera:float;

var espera_max:float;
function Start () {
espera=0;
if(espera_max==0)
{
espera_max=30;
}

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