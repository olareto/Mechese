#pragma strict
private var personaje:GameObject;
private var jugadorx:double;
private var jugadory:double;
private var ratax:double;
private var ratay:double;
private var visto:boolean;
private var radio_vista:float;
function Start () {
    radio_vista=25;
    personaje=GameObject.Find("Personaje");
    this.gameObject.name=Personaje_definitivo.malo;
    visto=false;
}

function FixedUpdate () {
    visto=this.Visto();
    if(visto){
        this.GetComponent.<Rigidbody2D>().velocity.x=-2;
    }
}
function Visto():boolean{
    var vistoo:boolean;
    jugadorx = personaje.GetComponent.<Rigidbody2D>().position.x;
    ratax=this.gameObject.transform.position.x;
    if(jugadorx<ratax+radio_vista  &&  jugadorx>ratax-radio_vista){
        vistoo=true;
    }
    else{
        vistoo=false;
    }
    return vistoo;
}