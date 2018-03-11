
var saltos:float;
var vidas:float;
var fuerza_maxima:double;
var fuerza_y:double;
var personaje:Animator;
var suelo:boolean ;
var derecha:double;
var izquierda:double;
var espera_saltos:float;
var espera_danyo:float;
var espera_saltos_max:float;
var espera_danyo_max:float;
var espera_berserk_max:float;
var espera_berserk:float;
var gravedad:float;


var danyado:boolean;
var berserk:boolean;

public var imagen_vida:Texture2D[];
public var vida1:GUITexture;
public var vida2:GUITexture;
public var vida3:GUITexture;
public var vida4:GUITexture;

function Start () {
gravedad=2000;
fuerza_y=26;
saltos=0;
fuerza_maxima=400;
suelo=true;
derecha=0;
izquierda=0;
espera_saltos=0;
vidas=3;
espera_danyo=86;
espera_danyo_max=85;
espera_saltos_max=15;
espera_berserk_max=160;
espera_berserk=espera_berserk_max+1;

}

function FixedUpdate () {
//rigidbody.constantForce=Vector3(0,-gravedad,0);
GetComponent.<Rigidbody>().AddForce(Vector3(0,-gravedad,0));
if(espera_saltos<=espera_saltos_max)
{
espera_saltos++;
}
if(espera_danyo<=espera_danyo_max)
{
espera_danyo++;
}
if(espera_berserk<=espera_berserk_max)
{
espera_berserk++;
}
//print(espera_berserk);
//print(espera_saltos);
//print(suelo);
//print(saltos);
personaje.SetBool("suelo",suelo);
personaje.SetInteger("saltos",saltos);
personaje.SetFloat("speed_y",GetComponent.<Rigidbody>().velocity.y);
personaje.SetBool("danyado",danyado);
personaje.SetBool("berserk",berserk);
if(berserk)
{
berserk=false;
}
if(danyado)
{
danyado=false;
}


//rigidbody.velocity.y


// saber cuando pulsamos espacio y saltar
if(espera_danyo>espera_danyo_max)
{
if(Input.GetKey(KeyCode.Space))
{

if(saltos<2&&espera_saltos>espera_saltos_max)
{
espera_saltos=0;
GetComponent.<Rigidbody>().velocity.y=0;
GetComponent.<Rigidbody>().AddForce(Vector3(0,fuerza_y*gravedad,0));
saltos++;
suelo=false;

//personaje.SetBool("suelo",suelo);
//personaje.setInteger("saltos",saltos);
}
}


if(Input.GetKey(KeyCode.RightArrow))
{
if(derecha<1){
derecha=derecha+0.01;
}
GetComponent.<Rigidbody>().velocity.x=25*derecha;
//rigidbody.AddForce(Vector3(25,0,0));
}
else
{
derecha=0;
}
if(Input.GetKey(KeyCode.LeftArrow))
{
if(izquierda<1){
izquierda=izquierda+0.01;
}
GetComponent.<Rigidbody>().velocity.x=-25*izquierda;
//rigidbody.AddForce(Vector3(25,0,0));
}
else
{
izquierda=0;
}
}


}
public function quitarvida():void{
vidas--;
switch (vidas)
{
case 0:
vida1.texture=imagen_vida[1];
case 1:
vida2.texture=imagen_vida[1];
case 2:
vida3.texture=imagen_vida[1];
case 3:
vida4.texture=imagen_vida[2];
}
}
function darvida():void{
vida1.texture=imagen_vida[0];
vida2.texture=imagen_vida[0];
vida3.texture=imagen_vida[0];
if(vidas==3){
vidas=4;
vida4.texture=imagen_vida[0];
}
else{
vidas=3;
}
}
//colisiones
function OnCollisionEnter(vColisionando :Collision){
var velCol: Vector3 = -1*vColisionando.relativeVelocity;
var nombre:String=vColisionando.gameObject.name;

switch (nombre)
{
case "Suelo":
print("suelo");
GetComponent.<Rigidbody>().velocity.y=0;
saltos=0;
suelo=true;
break;

case "Cube":
GetComponent.<Rigidbody>().AddForce(Vector3(0,-500,0));
break;

case "Moneda":
GetComponent.<Rigidbody>().velocity=velCol;
UnityEngine.Object.Destroy(vColisionando.gameObject);
break;

case "Malo":
vColisionando.gameObject.GetComponent.<Collider>().isTrigger=true;
if(espera_berserk>espera_berserk_max && espera_danyo>espera_danyo_max)

{
derecha=0;
espera_danyo=0;

danyado=true;
GetComponent.<Rigidbody>().velocity=Vector3(-30,0,0);
quitarvida();

//rigidbody.velocity.x=-60;
}
else if(espera_berserk<=espera_berserk_max){
UnityEngine.Object.Destroy(vColisionando.gameObject);
GetComponent.<Rigidbody>().velocity=velCol;
}

break;

case "Berserk":
UnityEngine.Object.Destroy(vColisionando.gameObject);
GetComponent.<Rigidbody>().velocity=velCol;
berserk=true;
espera_berserk=0;
break;

case "Botiquin":
UnityEngine.Object.Destroy(vColisionando.gameObject);
GetComponent.<Rigidbody>().velocity=velCol;
break;

case "Pescado":
UnityEngine.Object.Destroy(vColisionando.gameObject);
GetComponent.<Rigidbody>().velocity=velCol;
darvida();
break;



case "Vacio":
break;

case "Fin":
Application.LoadLevel("Victoria");
break;
}
}