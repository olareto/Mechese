#pragma strict
var animador:Animator;
private var personaje:GameObject;
var espera_ataque:float;
var espera_ataque_max:float;
var visto:boolean;
var Gato_sonido:GameObject;
var velocidad:double;
var jugadorx:double;
var ratax:double;
private var radio_vista:double;
var atacado:boolean;
function Start () {
    atacado=false;
    velocidad=30;
    visto=false;
    radio_vista=20;
    espera_ataque_max=30;
    espera_ataque=espera_ataque_max+1;
    this.gameObject.name=Personaje_definitivo.malo;
    personaje=GameObject.Find("Personaje");
}

function FixedUpdate () {
    animador.SetBool("visto",visto);
    if(espera_ataque<=espera_ataque_max){
        espera_ataque++;
    }
    visto=this.Visto();
    if(visto==true && espera_ataque>espera_ataque_max){
        if(atacado==false){
            atacado=true;
            var Gato_prefab:GameObject;
            Gato_prefab = Instantiate(Gato_sonido, this.transform.position, this.transform.rotation);
        }
        espera_ataque=0;
        GetComponent.<Rigidbody2D>().velocity.x=-velocidad;
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
    else if(vColisionando.gameObject.name=="Malo"){
        GetComponent.<Rigidbody2D>().velocity.x=0;
    }
}

function OnTriggerExit2D(per: Collider2D)
{
    if(per.gameObject.name=="Personaje"){
        this.GetComponent.<Collider2D>().isTrigger=false;
    }
}
function Visto():boolean
{
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