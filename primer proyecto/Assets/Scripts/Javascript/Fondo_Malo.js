#pragma strict

var PeriodicoPrefab:GameObject;

var trozo:GameObject[];


var primerax:double;//-12.15268
var primeray:double;//-4.652493
var prefabs:GameObject[];

var otromas:boolean;


var numero_prefab:int;




function Start () {
primerax=-12.15268;
primeray=-4.652493;
numero_prefab=0;
otromas=false;
}

function Update () {
if(otromas==true){
otromas=false;

var trozo_1num:int;

trozo_1num=Random.Range(0, 5.9);

primerax=(primerax+118.305);
prefabs[0] = Instantiate(trozo[trozo_1num],Vector3(primerax,primeray,0), this.transform.rotation);
if(numero_prefab==0)
{
numero_prefab=1;
}
else{
numero_prefab=0;
}
}
}
function mastrozo()
{

otromas=true;

}
/**
function Gettrozo():GameObject 
{
var trozo_1num:int;

trozo_1num=Random.Range(0, 5.9);

return trozo[trozo_1num];


}



function Gety():double
{
return primeray;
}
function Getx():double
{
return primerax;
}

function sumarx()
{
primerax=(primerax+118.305);
}
**/




