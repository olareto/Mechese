#pragma strict


var vuelta:boolean;

var contador_rotaciones:int;
var espera:int;
var espera_max:int;

var espera_vuelta:int;
var espera_vuelta_max:int;


var derecha:boolean;


function Start () {
dar_vuelta();
espera_max=10;
espera=espera_max+1;
espera_vuelta_max=20;
espera_vuelta=0;
contador_rotaciones=0;
vuelta=false;
}

function FixedUpdate () {


if(vuelta==true)
{
this.transform.Rotate(Vector3(0,0,400* Time.deltaTime));
}
else{

////////////7

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





//////////////










}



//this.transform.rotation=Quaternion.Euler(0,0,100);

if(Input.GetKey(KeyCode.Space))
{
vuelta=true;
vuelta_false();
}

}
function dar_vuelta()
{
var numero:double;
var resultado:double;
while(true)
{
numero= Random.Range(300,600);
resultado = numero/100.0;


yield WaitForSeconds(resultado);
vuelta=true;
vuelta_false();
}


}
function vuelta_false()
{

//for(var i:int=0;i<16;i++)

yield WaitForSeconds(360.0/400.0);

vuelta=false;






}