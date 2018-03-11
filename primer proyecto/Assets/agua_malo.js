#pragma strict
private var espera_ataque:double;
private var espera_ataque_max:double;
function Start () {
espera_ataque_max=8;
    espera_ataque=0;
}

function Update () {
 this.transform.rotation=Quaternion.AngleAxis(8.71, Vector3(0,0,1));

//this.transform.rotation.z=16.12;

if(espera_ataque<=espera_ataque_max)
{
espera_ataque++;
}
else{
UnityEngine.Object.Destroy(this.gameObject);
}
this.transform.localScale.x=this.transform.localScale.x+0.01;
this.transform.localScale.y=this.transform.localScale.y+0.01;


}