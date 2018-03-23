#pragma strict
var fuerza_y:double;
private var pulsado:boolean;
//private var suelo:boolean;
private var gravedad:int;
private  var saltos:int;
private  var saltos_max:int;
private var derecha:double;
var velocidad:int;

function Start () 
{
    velocidad= 25;
    derecha=0;
    //0.04
    //2500
    gravedad=100;
    fuerza_y=20;
    saltos=0;
    saltos_max=2;
    pulsado=false;
}

function Update () {

    //derecha poco a poco
    if(derecha<1){
        derecha=derecha+0.01;
    }
    //velocidad Personaje
    //if(espera_berserk<=espera_berserk_max)
    //{
        GetComponent.<Rigidbody>().velocity.x=1.5*velocidad*derecha;
    //}
    //else{
        GetComponent.<Rigidbody>().velocity.x=velocidad*derecha;

    //}

    //Gravedad
    GetComponent.<Rigidbody>().AddForce(Vector3(0,-gravedad,0));




    if(Input.GetKey(KeyCode.Space)){





        if(pulsado==false){
            pulsado=true;
            if(saltos<saltos_max){
                saltos++;
                GetComponent.<Rigidbody>().velocity.y=0;
                GetComponent.<Rigidbody>().AddForce(Vector3(0,gravedad*fuerza_y,0));
            }
        }
    }else{
        pulsado=false;
    }

}