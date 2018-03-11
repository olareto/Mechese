#pragma strict
var velocidad:double;
var velocidadx:double;
function Start () {
destruir();
velocidad=-7;
velocidadx=10/4;
zigzag();
rotacionnn();
}

function Update () {



this.GetComponent.<Rigidbody>().velocity.y=velocidad;
this.GetComponent.<Rigidbody>().velocity.x=velocidadx;



}



function zigzag()
{

while(true)
{
yield WaitForSeconds(0.4);
velocidadx=-velocidadx;

}

}




function rotacionnn()
{
var aux:int;
var aux2:int;

while(true)
{
yield WaitForSeconds(0.01);

aux=Random.Range(1,10);
aux2=Random.Range(1,10);

this.transform.Rotate(Vector3(0,aux,aux2));

}
}
function destruir()
{
yield WaitForSeconds(3);
UnityEngine.Object.Destroy(this.gameObject);

}
