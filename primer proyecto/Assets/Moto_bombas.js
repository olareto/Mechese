#pragma strict
var BombaPrefab:Rigidbody;
function Start () {

}

function Update () {

}
function lanzarBomba()
{
var BombaInstance : Rigidbody;
        BombaInstance = Instantiate(BombaPrefab, this.transform.position+Vector3(0,5,0), this.transform.rotation);
        //cartaInstance.AddForce(Vector3(-1*velocidad,-1*velocidad,0) * 5000);
        //cartaInstance.transform.rotation = Quaternion.Euler (0, 0, 35);
}
function OnTriggerEnter(per:Collider)
{
if(per.name=="Personaje")
{
GetComponent.<Rigidbody>().velocity.x=-20;
yield WaitForSeconds(1.5);
lanzarBomba();
}
}
function OnTriggerExit(per:Collider)
{

}