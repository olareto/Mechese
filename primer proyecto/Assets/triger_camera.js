#pragma strict

var camara_position:double;
var camara:GameObject;
var camara_script:Camara_loca;
var tocado:boolean;
var personajeeee:GameObject;


function Start () {
tocado=false;

	camara=GameObject.Find("Camera");
    camara_script=camara.GetComponent(Camara_loca);
}
function Update () {
if(tocado==true)
{
camara_script.SetCambio(true);
    if (personajeeee.GetComponent.<Rigidbody2D>().velocity.y>=0)
{
camara_script.Setposicion_y(camara_position,true);
}
else{
camara_script.Setposicion_y(camara_position,false);
}
}



}

function OnTriggerEnter2D(per:Collider2D)
{
//var velCol: Vector3 = -1*per.relativeVelocity;
//per.rigidbody.velocity.y
if(per.gameObject.name=="Personaje")
{
personajeeee=per.gameObject;
tocado=true;
camara_script.SetCambio(true);
    if (per.GetComponent.<Rigidbody2D>().velocity.y>=0)
{
camara_script.Setposicion_y(camara_position,true);
}
else{
camara_script.Setposicion_y(camara_position,false);
}
}
}

function OnTriggerExit2D(per: Collider2D)
{
if(per.gameObject.name=="Personaje")
{
tocado=false;
//camara_script.SetCambio(false);
}
}
