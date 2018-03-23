#pragma strict


var jefe:GameObject;
var jefe_script:Jefe_1;


function Start () {

	//jefe=GameObject.Find("jefe_1");
    //jefe_script=jefe.GetComponent(Jefe_1);
}

function FixedUpdate () {

}
function OnTriggerEnter(per:Collider)
{
if(per.gameObject.name=="jefe_1")
{
jefe_script.embiste=false;
}

}
