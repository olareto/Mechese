#pragma strict
private var techo:double;
private var radio_posicion:double;
private var izquierda:double;
private var derecha:double;
private var velocidad:double;
public var pajarooo:GameObject;
 var personaje:GameObject;
private var jugadorx:double;
private var ratax:double;
private var visto:boolean;
private var ataque:float;
private var ataque_max:float;
private var levita:float;
private var picado:double;
private var radio_vista:double;
function Start () {
    personaje = GameObject.Find("Personaje");
    this.gameObject.name=Personaje_definitivo.malo;
    radio_vista=10;
    picado=20;
    levita=2500;
    techo = GetComponent.<Rigidbody2D>().position.y -1;
    ataque_max=12;
    ataque=ataque_max+1;
    visto=false;
    radio_posicion=7.5;
    izquierda = GetComponent.<Rigidbody2D>().position.x-radio_posicion;
    derecha = GetComponent.<Rigidbody2D>().position.x+radio_posicion;
    velocidad=5;
}
function FixedUpdate() {
    if(ataque<=ataque_max){
        ataque++;
    }
    visto=this.Visto();
    if (visto == true && ataque > ataque_max && techo <= GetComponent.<Rigidbody2D>().position.y){

        var pajaro_prefab:GameObject;
        pajaro_prefab = Instantiate(pajarooo, this.transform.position, this.transform.rotation);
        GetComponent.<Rigidbody2D>().velocity.y=0;
        GetComponent.<Rigidbody2D>().AddForce( Vector2(0, -picado * levita));
        GetComponent.<Rigidbody2D>().velocity.x=-velocidad;
        ataque=0;
    }
    if (techo <= GetComponent.<Rigidbody2D>().position.y && ataque>ataque_max){
        GetComponent.<Rigidbody2D>().velocity.y=0;
    }
    else {
        GetComponent.<Rigidbody2D>().AddForce(Vector2(0, levita));
    }
}



function OnCollisionEnter2D(vColisionando: Collision2D){
    var velCol: Vector2 = -1*vColisionando.relativeVelocity;
    if(vColisionando.gameObject.name=="Moneda"){
        GetComponent.<Rigidbody2D>().velocity=velCol;
    }
    else if(vColisionando.gameObject.name=="Personaje"){
        GetComponent.<Rigidbody2D>().velocity.x=-velocidad;
    }
}


function OnTriggerExit2D(per: Collider2D){
    if(per.gameObject.name=="Personaje"){
        this.GetComponent.<Collider2D>().isTrigger=false;
    }
}
function Visto():boolean{
    var vistoo:boolean;
    jugadorx = personaje.GetComponent.<Rigidbody2D>().position.x;
    ratax = GetComponent.<Rigidbody2D>().position.x;
    if(jugadorx<ratax+radio_vista  &&  jugadorx>ratax-radio_vista){
        vistoo=true;
    }
    else{
        vistoo=false;
    }
    return vistoo;
}