#pragma strict
var personaje:GameObject;
var codigo_personaje:Personaje_definitivo;
function Start () {
	personaje=GameObject.Find("Personaje");
    codigo_personaje=personaje.GetComponent(Personaje_definitivo);
}
function OnTriggerEnter2D(per: Collider2D) {
    print("colision" + per.gameObject.name);
    if(per.gameObject.name=="Personaje"){
        codigo_personaje.MasMoneda();
        UnityEngine.Object.Destroy(this.gameObject);
    }
}