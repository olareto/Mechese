#pragma strict
private var espera:float;
private var espera_max:float;
function Start () {
    espera_max=50;
    espera=0;
    this.gameObject.name="Malo";
}
function FixedUpdate () {
    if(espera<=espera_max){
        espera++;
    }
    else{
        UnityEngine.Object.Destroy(this.gameObject);
    }
}
function OnCollisionEnter2D(vColisionando: Collision2D){
    var velCol: Vector2 = -1*vColisionando.relativeVelocity;
    if(vColisionando.gameObject.name=="Moneda"){
        GetComponent.<Rigidbody2D>().velocity=velCol;
    }
    else{
        UnityEngine.Object.Destroy(this.gameObject);
    }
}
function OnTriggerExit2D(per:Collider2D){
    if(per.gameObject.name=="Personaje"){
        this.GetComponent.<Collider2D>().isTrigger=false;
    }
}
