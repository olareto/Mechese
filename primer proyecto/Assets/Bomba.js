#pragma strict
private var espera:float;
private var espera_max:float;
var SocavonPrefab : GameObject;
function Start () {
espera_max=60;
espera=0;
//this.gameObject.name="Malo";
GetComponent.<Rigidbody>().velocity.x=19;
//rigidbody.velocity.y=6;
GetComponent.<Rigidbody>().AddForce(0,30000,0);


}
//-0.94
function FixedUpdate () {
GetComponent.<Rigidbody>().AddForce(0,-600,0);

if(espera<=espera_max)
{
espera++;
}
else{
//rigidbody.velocity.x=25;
//rigidbody.velocity.y=-6;

}

}
function OnCollisionEnter(vColisionando :Collision){
var velCol: Vector3 = -1*vColisionando.relativeVelocity;
if(vColisionando.gameObject.name=="Moneda")
{
GetComponent.<Rigidbody>().velocity=velCol;
}
else 
{
//var hinges : GameObject[]= FindObjectsOfType(GameObject) as GameObject[];
		//for (var hinge : GameObject in hinges) {
		//var nombre:String=hinge.gameObject.name;
		//if(nombre=="Props_01_suelo" && hinge.transform.position.x<this.transform.position.x && this.transform.position.x<(hinge.transform.position.x+16.5))
		//{
		var SocavonInstance : GameObject;
      SocavonInstance = Instantiate(SocavonPrefab, Vector3(this.transform.position.x-3.5273,-4.652493,0), this.transform.rotation);
      //UnityEngine.Object.Destroy(hinge.gameObject);

		

UnityEngine.Object.Destroy(this.gameObject);
}
}

