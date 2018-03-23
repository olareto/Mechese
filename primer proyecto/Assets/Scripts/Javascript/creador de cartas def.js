#pragma strict
var animador:Animator;
var carta_sonido_def:GameObject;
var cartaPrefab: GameObject;
private var personaje:GameObject;
private var jugadorx:double;
private var ratax:double;
private var velocidad:double;
var visto:boolean;
var atacando:boolean;
private var radio_vista:float;
var espera_ataque:float;
private var espera_ataque_max:float;
function Start () {
    atacando=false;
    radio_vista=25;
    velocidad=3;
    espera_ataque_max=50;
    espera_ataque=espera_ataque_max+1;
    personaje=GameObject.Find("Personaje");
    visto=false;
    this.gameObject.name="Malo";
}

function FixedUpdate () {
    atacando=false;
    visto=this.Visto();
    if(visto){
        if(espera_ataque<=espera_ataque_max){
            espera_ataque++;
        }
        else{
            atacando=true;
            lanzar_cartas();
            espera_ataque=0;
        }
    }
    animador.SetBool("atacando",atacando);
}


function lanzar_cartas()
{
    yield WaitForSeconds(0.1);
    var cartaSonido : GameObject;
    cartaSonido = Instantiate(carta_sonido_def, this.transform.position, this.transform.rotation);
    var cartaInstance: Rigidbody2D;
    cartaInstance = Instantiate(cartaPrefab, this.transform.position - Vector3(3, 2, 0), this.transform.rotation).GetComponent.<Rigidbody2D>();
    cartaInstance.AddForce(Vector2(-1*velocidad,-1*velocidad) * 5000);
    cartaInstance.transform.rotation = Quaternion.Euler (0, 0, 35);
    var cartaInstance2: Rigidbody2D;
    cartaInstance2 = Instantiate(cartaPrefab, this.transform.position - Vector3(3, 0, 0), this.transform.rotation).GetComponent.<Rigidbody2D>();
    cartaInstance2.AddForce(Vector2(-1*velocidad,0) * 5000);
    var cartaInstance3: Rigidbody2D;
    cartaInstance3 = Instantiate(cartaPrefab, this.transform.position - Vector3(3, -2, 0), this.transform.rotation).GetComponent.<Rigidbody2D>();
    cartaInstance3.AddForce(Vector2(-1*velocidad,1*velocidad) * 5000);
    cartaInstance3.transform.rotation = Quaternion.Euler (0, 0, -35);
}


function Visto():boolean
{
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