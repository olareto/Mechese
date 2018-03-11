#pragma strict
var contador_rotaciones:int;
var espera:int;
var espera_max:int;

var espera_vuelta:int;
var espera_vuelta_max:int;


var vuelta:boolean;
var derecha:boolean;


function Start () {
espera_max=10;
espera=espera_max+1;
espera_vuelta_max=20;
espera_vuelta=0;
contador_rotaciones=0;
vuelta=false;
}

function Update () {


if(vuelta==false)
{
if(espera>espera_max )
{
espera=0;
contador_rotaciones++;
/**
if(contador_rotaciones==7)
{
vuelta=true;
contador_rotaciones=0;
}

**/


if(derecha==true)
{
derecha=false;
}
else{
derecha=true;
}

}
else{
espera++;






if(derecha==true)
{
transform.rotation = Quaternion.Slerp(transform.rotation, Quaternion.Euler (0, 0, 6),Time.deltaTime*3);


}





else{
transform.rotation = Quaternion.Slerp(transform.rotation, Quaternion.Euler (0, 0, 345),Time.deltaTime*3);

}

}


}
else{
if(espera_vuelta<espera_vuelta_max)
{
espera++;
}
else{

}






}
}