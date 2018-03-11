#pragma strict

var Datos_juego:GameObject;
var Dato:Estado_juego;

var cargando:GameObject;


function Start () {
    Datos_juego=GameObject.Find("Datos_juego");
    Dato=Datos_juego.GetComponent(Estado_juego);
}

function FixedUpdate () {

 for (var touch : Touch in Input.touches) {
        if (touch.phase == TouchPhase.Began) {
if(touch.position.x > this.GetComponent.<GUITexture>().pixelInset.x && touch.position.x < this.GetComponent.<GUITexture>().pixelInset.x + this.GetComponent.<GUITexture>().pixelInset.width &&
   touch.position.y > this.GetComponent.<GUITexture>().pixelInset.y && touch.position.y < this.GetComponent.<GUITexture>().pixelInset.y + this.GetComponent.<GUITexture>().pixelInset.height)
{

var cartaInstance : GameObject;
        cartaInstance = Instantiate(cargando,Vector3(0,0,0), this.transform.rotation);



Application.LoadLevel(Dato.Ultimo_mundo);

}
}
}
}


