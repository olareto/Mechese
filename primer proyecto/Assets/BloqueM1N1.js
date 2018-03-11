#pragma strict


var bloques:GameObject[];
var bloques_malos:GameObject[];
/**
var bloque1:GameObject;
var bloque2:GameObject;
var bloque3:GameObject;
var bloque4:GameObject;
var bloque5:GameObject;
var bloque6:GameObject;
var bloque7:GameObject;
var bloque8:GameObject;
var bloque9:GameObject;
var bloque10:GameObject;
var bloque11:GameObject;
var bloque12:GameObject;
**/
var contador:int;


function Start () {

//bloques=new GameObject[12];

bloques[0]=GameObject.Find("Bloque1");
bloques[1]=GameObject.Find("Bloque2");

bloques_malos[0]=GameObject.Find("Bloque1");
bloques_malos[1]=GameObject.Find("Bloque2");


//UnityEngine.Object.Destroy(bloques[0].gameObject);





contador=0;
}

/**
function OnTriggerEnter(per:Collider)
{
if(per.gameObject.name=="Personaje")
{

UnityEngine.Object.Destroy(bloques_malos[contador].gameObject);

bloques_malos[contador+2] = Instantiate(bloques[contador+2], Vector3(0,0,0), this.transform.rotation);
       
       

contador++;

}
}
**/
function tunel()
{


UnityEngine.Object.Destroy(bloques_malos[contador].gameObject);

bloques_malos[contador+2] = Instantiate(bloques[contador+2], Vector3(0,0,0), this.transform.rotation);
       
       

contador++;


}