#pragma strict
var animador: Animator;
var Perro_sonido: GameObject;
private var personaje: GameObject;
private var jugadorx: double;
private var jugadory: double;
private var ratax: double;
private var ratay: double;
private var visto: boolean;
var radio_vista: float;
private var gravedad: float;
private var salto: double;
private var velx: double;
private var sueloo: double;
private var ataque: float;
private var ataque_max: float;
var abajo: String;
//var debajo:boolean; 
function Start() {
    animador = this.GetComponent(Animator);
    ataque_max = 12;
    ataque = ataque_max + 1;
    velx = 5;
    if (abajo == "bajo") {
        radio_vista = 80;
    }
    else {
        radio_vista = 50;
    }
    personaje = GameObject.Find("Personaje");
    this.gameObject.name = "Malo";
    visto = false;
    gravedad = 2500;
    salto = 20 * gravedad;
    sueloo = transform.position.y + 1;
}

function FixedUpdate() {
    animador.SetBool("visto", visto);
    if (ataque <= ataque_max) {
        ataque++;
    }
    visto = this.Visto();
    if (visto == true && ataque > ataque_max && sueloo >= GetComponent.<Rigidbody2D>().position.y) {
        var Perro_prefab: GameObject;
        Perro_prefab = Instantiate(Perro_sonido, this.transform.position, this.transform.rotation);
        GetComponent.<Rigidbody2D>().velocity.y = 0;
        GetComponent.<Rigidbody2D>().AddForce(Vector2(0, salto));
        GetComponent.<Rigidbody2D>().velocity.x = -velx;
        ataque = 0;
    }
    if (sueloo >= GetComponent.<Rigidbody2D>().position.y && ataque > ataque_max) {
        GetComponent.<Rigidbody2D>().velocity.y = 0;
    }
    else {
        GetComponent.<Rigidbody2D>().AddForce(Vector2(0, -gravedad));
    }
}
function OnCollisionEnter2D(vColisionando: Collision2D) {
    var velCol: Vector2 = -1 * vColisionando.relativeVelocity;
    if (vColisionando.gameObject.name == "Moneda") {
        GetComponent.<Rigidbody2D>().velocity = velCol;
    }
    else if (vColisionando.gameObject.name == "Personaje") {
        GetComponent.<Rigidbody2D>().velocity.x = -velx;
    }

}
function OnTriggerExit2D(per: Collider2D) {
    if (per.gameObject.name == "Personaje") {
        this.GetComponent.<Collider2D>().isTrigger = false;
    }
}
function Visto(): boolean {
    var vistoo: boolean;
    jugadorx = personaje.GetComponent.<Rigidbody2D>().position.x;
    ratax = this.gameObject.transform.position.x;
    if (jugadorx < ratax + radio_vista && jugadorx > ratax - radio_vista) {
        vistoo = true;
    }
    else {
        vistoo = false;
    }
    return vistoo;
}