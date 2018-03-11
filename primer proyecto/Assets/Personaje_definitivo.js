
var intro:boolean;
var polvo_sonido:GameObject;
var polvo_anim:GameObject;
var meta:boolean;
var caido:boolean;
private var audio_risa:AudioSource;
private var unaVez:boolean;
private var Datos_juego:GameObject;
private var Dato:Estado_juego;
private var volver_al_menu:GameObject;
private var reintentar:GameObject;
private var gameoverdibujo:GameObject;
private var gameovertitulo:GameObject;
private var gameoverfondo:GameObject;
var Sardina_sonido:GameObject;
var Sonido_Danyo:GameObject;
var Sonido_Berserk:GameObject;
//enteros
public var mundo:float;
public var nivel:float;
private  var Sonido_moneda_numero:float;
//////
private  var gravedad_p:float;
private  var saltos_p:float;
//////
private  var saltos:float;
private  var saltos_max:float;
private var vidas:float;
private var gravedad:float;
private var monedas: float;
//esperas
var espera_danyo:float;
var espera_danyo_max:float;
var espera_intermitente:float;
var espera_intermitente_max:float;
var espera_berserk:float;
var espera_berserk_max:float;
var espera_invencible:float;
var espera_invencible_max:float;
var espera_suelo:float;
var espera_suelo_max:float;
//reales
var fuerza_y:double;
private var derecha:double;
//booleanos
private var pulsado:boolean;
private var suelo:boolean ;
private var danyado:boolean;
private var berserk:boolean;
 var vivo:boolean;
//Sonidos
public var Sonidos_moneda:GameObject[];
//imagenes
public var imagen_vida:Sprite [];
public var imagen_numero:Texture2D[];
//animator
private var personaje:Animator;
private var velocidad:float;
//hub vidas
private var vida1:SpriteRenderer;
private var vida2:SpriteRenderer;
private var vida3:SpriteRenderer;
private var vida4:SpriteRenderer;
//hub numeros moneda
private var moneda_unidad:GUITexture;
private var moneda_decena:GUITexture;
private var moneda_centena:GUITexture;
private var moneda_mil:GUITexture;
private var moneda_diezmil:GUITexture;
//numeros moneda separados
private var monedas_unidad:float;
private var monedas_decena:float;
private var monedas_centena:float;
private var monedas_mil:float;
private var monedas_diezmil:float;
//hub numeros tiempo
private var unidad:GUITexture;
private var decena:GUITexture;
private var centena:GUITexture;
private var mil:GUITexture;
private var diezmil:GUITexture;
public static var malo:String="Malo";
public static var name_suelo:String="Suelo";
private var allAudioSources : AudioSource[];

function Start () {
    meta =false;
    personaje=this.GetComponent(Animator);
    reintentar=GameObject.Find("Reintentar");
    gameoverdibujo=GameObject.Find("Gameoverdibujo");
    gameovertitulo=GameObject.Find("Gameovertitulo");
    gameoverfondo=GameObject.Find("Gameoverfondo");
    volver_al_menu=GameObject.Find("Volver al menu");
    vivo=true;
    monedas_unidad=0;
    monedas_decena=0;
    monedas_centena=0;
    monedas_mil=0;
    monedas_diezmil=0;
    intro=false;
    this.gameObject.name="Personaje";
    //seleccionar el hub
    var hinges : GUITexture[]= FindObjectsOfType(GUITexture) as GUITexture[];
	for (var hinge : GUITexture in hinges) {
		var nombre:String=hinge.gameObject.name;
		switch(nombre)
		{
		    case "moneda_unidad":
		        moneda_unidad=hinge;
		        break;
		    case "moneda_decena":
		        moneda_decena=hinge;
		        break;
		    case "moneda_centena":
		        moneda_centena=hinge;
		        break;
		    case "moneda_mil":
		        moneda_mil=hinge;
		        break;
		    case "moneda_diezmil":
		        moneda_diezmil=hinge;
		        break;
		}
	}
	var hingess : SpriteRenderer[]= FindObjectsOfType(SpriteRenderer) as SpriteRenderer[];
	for (var hinge : SpriteRenderer in hingess) {
		var nombrep:String=hinge.gameObject.name;
		switch(nombrep){
		    case "vida1":
		        vida1=hinge;
		        break;
		    case "vida2":
		        vida2=hinge;
		        break;
		    case "vida3":
		        vida3=hinge;
		        break;
		    case "vida4":
		        vida4=hinge;
		        break;
		}
	}
    Datos_juego=GameObject.Find("Datos_juego");
    Sonido_moneda_numero=0;
    Dato=Datos_juego.GetComponent(Estado_juego);
    vidas=3;
    gravedad_p=1000;
    saltos_p=50000;
    //velocidad = 15;
    velocidad = 20;
    fuerza_y=20;
    monedas=0;
    gravedad=2500;
    saltos=0;
    saltos_max=2;
    suelo=true;
    derecha=0;
    espera_danyo_max=90;
    espera_danyo=espera_danyo_max+1;
    espera_berserk_max=240;
    espera_berserk=espera_berserk_max+1;
    espera_invencible_max=240;
    espera_invencible=espera_invencible_max+1;
    espera_intermitente_max=4;
    espera_intermitente=espera_intermitente_max+1;
    espera_suelo_max=10;
    espera_suelo=espera_suelo_max+1;
    pulsado=false;
    //(Vector3(0,-gravedad,0));
    //Sonidos_moneda
    if(mundo==1){
       if(nivel==1){
            intro=true;
            Dato.SetUltimo_mundo("PrimerNivel");
        }
        else if (nivel==2){
            Dato.SetUltimo_mundo("segundo_nivel");
        }
        else{
            Dato.SetUltimo_mundo("Malo_1");
            vidas=1;
            vida2.sprite=imagen_vida[1];
            vida3.sprite=imagen_vida[1];
        }
    }
    else if (mundo==2){
       if(nivel==1){
            Dato.SetUltimo_mundo("Mundo_2_Nivel_1");
            saltos_max=1;
            fuerza_y=25;
        }
        else if (nivel==2){
            Dato.SetUltimo_mundo("segundo_nivel");
        }
        else{
            Dato.SetUltimo_mundo("Malo_1");
            vidas=1;
            vida2.sprite=imagen_vida[1];
            vida3.sprite=imagen_vida[1];
        }
    }
}
function FixedUpdate () {
    if(intro==false){
        if(meta==false){
            if(vivo==true){
                //si se cae sin saltar es como si saltara
                if (saltos == 0 && GetComponent.<Rigidbody2D>().velocity.y<-10){
                    saltos=1;
                    suelo=false;
                }
	            //aplicamos gravedad
                //cubo 5,5 rect 36
                //nueva gravedad
                if (GetComponent.<Rigidbody2D>().velocity.y < -35) {
                    GetComponent.<Rigidbody2D>().velocity.y = -35;
                }
                else {
                    //gravedad = 1250 + ((2500 * GetComponent.<Rigidbody2D>().velocity.y * GetComponent.<Rigidbody2D>().velocity.y) / (35 * 35));
                    //gravedad = 3750 - GetComponent.<Rigidbody2D>().velocity.y * 107;
                    GetComponent.<Rigidbody2D>().AddForce(Vector2(0, -gravedad));
                }
                //esperas
                if(espera_suelo<=espera_suelo_max){
                    espera_suelo++;
                }
                if(espera_invencible<=espera_invencible_max){
                    espera_invencible++;
                    if(espera_intermitente<=espera_intermitente_max){
                        espera_intermitente++;
                    }
                    else{
                        espera_intermitente=0;
                        if(this.GetComponent.<Renderer>().sortingOrder==30){
                            this.GetComponent.<Renderer>().sortingOrder=-50;
                        }
                        else{
                            this.GetComponent.<Renderer>().sortingOrder=30;
                        }
                    }
                }
                else{
                    this.GetComponent.<Renderer>().sortingOrder=30;
                }
                //en un tiempo no podemos ni saltar ni nos dañan
                if(espera_danyo<=espera_danyo_max){
                    if(espera_danyo>=7){
                        danyado=false;
                    }
                    espera_danyo++;
                }
                //en  un tiempo estamos em modo berserk
                if(espera_berserk<=espera_berserk_max){
                    if(espera_berserk>=7){
                        berserk=false;
                    }
                    espera_berserk++;
                }
                //mandamos datos para la animacion
                personaje.SetBool("suelo",suelo);
                personaje.SetFloat("speed_y", GetComponent.<Rigidbody2D>().velocity.y);
                personaje.SetBool("danyado",danyado);
                personaje.SetBool("berserk",berserk);
                personaje.SetInteger("saltos",saltos);
                //si esta dañada ni nos movemos ni podemos saltar
                if (espera_danyo > espera_danyo_max) {
                    //espacio
                    if(Input.GetKey(KeyCode.Space)){
	                    if(pulsado==false){
		                    pulsado=true;
		                    if(saltos<saltos_max){
			                    saltos++;
			                    suelo=false;
                                GetComponent.<Rigidbody2D>().velocity.y = 0;
                                //GetComponent.<Rigidbody2D>().velocity.y = 30;
                                GetComponent.<Rigidbody2D>().velocity.y = 35 ;
		                    }
	                    }
                    }else{
	                    pulsado=false;
                    }
                    //fuerza a la derecha poco a poco
                    if(derecha<1){
                        derecha=derecha+0.01;
                    }
                    //velocidad Personaje
                    if(espera_berserk<=espera_berserk_max){
                        GetComponent.<Rigidbody2D>().velocity.x = 1.5 * velocidad * derecha ;
                    }
                    else{
                        GetComponent.<Rigidbody2D>().velocity.x = velocidad * derecha ;
                    }
                }
            }
            else{
                //personaje muerto
                this.gameObject.name = "muerto";
                //lo paramos
                GetComponent.<Rigidbody2D>().velocity.x=0;
                GetComponent.<Rigidbody2D>().velocity.y = -25;
                //el audio salga solo una vez
                if(unaVez==false){
	                unaVez=true;
	                audio_risa=gameoverdibujo.GetComponent(AudioSource);
	                audio_risa.Play();
                }
                //poner el gameover
                gameoverfondo.GetComponent.<GUITexture>().pixelInset.y=yfinal(63.3);
                if(gameoverdibujo.GetComponent.<GUITexture>().pixelInset.y>yfinal(132.3)){
                    gameoverdibujo.GetComponent.<GUITexture>().pixelInset.y=gameoverdibujo.GetComponent.<GUITexture>().pixelInset.y-20;
                }
                if(gameovertitulo.GetComponent.<GUITexture>().pixelInset.y>yfinal(155.4)){
                    gameovertitulo.GetComponent.<GUITexture>().pixelInset.y=gameovertitulo.GetComponent.<GUITexture>().pixelInset.y-20;
                }
                else{
                    volver_al_menu.GetComponent.<GUITexture>().pixelInset.y=yfinal(-0.4);
                    reintentar.GetComponent.<GUITexture>().pixelInset.y=yfinal(-0.4);
                }
                personaje.SetBool("vivo",vivo);
            }
        }
        else{
        //crear_confeti();
        }
    }

}

function xfinal(numero:double):double{
    var resultado:double;
    resultado = numero*Screen.width/580.6;
    return resultado;
}
function yfinal(numero:double):double{
    var resultado:double;
    resultado = numero*Screen.height/327.5;
    return resultado;
}
public function quitarvida():void{
    vidas--;
    switch (vidas)
    {
        case 0:
            caido=false;
            this.Muerte();
            vivo=false;
            vida1.sprite=imagen_vida[1];
            break;
        case 1:
            vida2.sprite=imagen_vida[1];
            break;
        case 2:
            vida3.sprite=imagen_vida[1];
            break;
        case 3:
            vida4.sprite=imagen_vida[2];
            break;
    }
}
//da todas la vidas
function botiquin():void{
    vida1.sprite=imagen_vida[0];
    vida2.sprite=imagen_vida[0];
    vida3.sprite=imagen_vida[0];
    if(vidas==3){
        vidas=4;
        vida4.sprite=imagen_vida[3];
    }
    else{
        vidas=3;
    }
}
//da una vida
function darvida():void{
    if (vidas!=3)
    {
        vidas++;
        switch (vidas)
        {
            case 2:
                vida2.sprite=imagen_vida[0];
                break;
            case 3:
                vida3.sprite=imagen_vida[0];
                break;
        }
    }
}
//suma una moneda
function Muerte(){
    this.GetComponent.<Renderer>().sortingOrder=30;
    allAudioSources = FindObjectsOfType(AudioSource) as AudioSource[];
    for(var audioS : AudioSource in allAudioSources) {
        audioS.Stop();
    }
    Dato.unaMuerteMas();
    Dato.guardar();
    //Application.LoadLevel("Muerte");
}
function MasMoneda(){
    var SonidoInstance : GameObject;
    SonidoInstance = Instantiate(Sonidos_moneda[Sonido_moneda_numero], this.transform.position, this.transform.rotation);
    if(Sonido_moneda_numero==5){
        Sonido_moneda_numero=0;
    }
    else{
        Sonido_moneda_numero++;
    }
    Dato.sumar_moneda();
    monedas++;
    actualizarMonedaUnidad();
    /**
    if(monedas==50||monedas==100||monedas==150)
    {
    darvida();
    }
    **/
}
//cambia imagen de moneda
private function actualizarMonedaUnidad()
{
    monedas_unidad++;
    //unidad
    if(monedas_unidad==10){
        monedas_unidad=0;
        monedas_decena++;
    }
    //decena
    if(monedas_decena==10){
        monedas_decena=0;
        monedas_centena++;
    }
    //centena
    if(monedas_centena==10){
        monedas_centena=0;
        monedas_mil++;
    }
    if(monedas_mil==10){
        monedas_mil=0;
        monedas_diezmil++;
    }
    moneda_unidad.texture=imagen_numero[monedas_unidad];
    moneda_decena.texture=imagen_numero[monedas_decena];
    moneda_centena.texture=imagen_numero[monedas_centena];
    moneda_mil.texture=imagen_numero[monedas_mil];
    moneda_diezmil.texture=imagen_numero[monedas_diezmil];
}
//colisiones
function OnCollisionEnter2D(vColisionando: Collision2D){
    var velCol: Vector2 = -1*vColisionando.relativeVelocity;
    var nombre:String=vColisionando.gameObject.name;

    switch (nombre){
        case "jefe_1":
            vColisionando.gameObject.GetComponent.<Collider2D>().isTrigger=true;
            var DanyoInstance2 : GameObject;
            DanyoInstance2 = Instantiate(Sonido_Danyo, this.transform.position, this.transform.rotation);
            quitarvida();
            vColisionando.rigidbody.velocity.x=-1*velCol.x;
            break;
        case "Suelo":
            if(espera_suelo>espera_suelo_max){
                espera_suelo=0;
                saltos=0;
                suelo=true;
            }
            break;

        case "Cube":
            GetComponent.<Rigidbody2D>().AddForce(Vector2(0,-500));
            break;
        case "Malo_caja":
            var DanyoInstance22 : GameObject;
            DanyoInstance22 = Instantiate(Sonido_Danyo, this.transform.position, this.transform.rotation);
            derecha=0;
            espera_danyo=0;
            espera_invencible=0;
            danyado=true;
            GetComponent.<Rigidbody2D>().velocity=Vector2(-5,0);
            quitarvida();
            break;
        case "Malo":
            vColisionando.gameObject.GetComponent.<Collider2D>().isTrigger=true;
            if(espera_berserk>espera_berserk_max && espera_danyo>espera_danyo_max && espera_invencible>espera_invencible_max){
                var DanyoInstance : GameObject;
                DanyoInstance = Instantiate(Sonido_Danyo, this.transform.position, this.transform.rotation);
                derecha=0;
                espera_danyo=0;
                espera_invencible=0;
                danyado=true;
                GetComponent.<Rigidbody2D>().velocity=Vector2(-5,0);
                quitarvida();
            }
            else if(espera_berserk<=espera_berserk_max){
                var polvo_prefab:GameObject;
                polvo_prefab = Instantiate(polvo_sonido, this.transform.position, this.transform.rotation);
                var polvo_prefab2:GameObject;
                polvo_prefab2 = Instantiate(polvo_anim, this.transform.position, this.transform.rotation);
                UnityEngine.Object.Destroy(vColisionando.gameObject);
                GetComponent.<Rigidbody2D>().velocity=velCol;
            }
            break;

        case "Berserk":
            var Sonido_BerserkInstance : GameObject;
            Sonido_BerserkInstance = Instantiate(Sonido_Berserk, this.transform.position, this.transform.rotation);
            UnityEngine.Object.Destroy(vColisionando.gameObject);
            GetComponent.<Rigidbody2D>().velocity=velCol;
            berserk=true;
            espera_berserk=0;
            break;
        case "Botiquin":
            botiquin();
            UnityEngine.Object.Destroy(vColisionando.gameObject);
            GetComponent.<Rigidbody2D>().velocity=velCol;
            var Sardina_prefab:GameObject;
            Sardina_prefab = Instantiate(Sardina_sonido, this.transform.position, this.transform.rotation);
            break;
        case "Pescado":
            UnityEngine.Object.Destroy(vColisionando.gameObject);
            GetComponent.<Rigidbody2D>().velocity=velCol;
            darvida();
            break;
        case "Vacio":
            caido=true;
            this.Muerte();
            this.GetComponent.<Collider2D>().enabled=false;
            GetComponent.<Rigidbody2D>().velocity=velCol;
            vivo=false;
            vida1.sprite=imagen_vida[1];
            vida2.sprite=imagen_vida[1];
            vida3.sprite=imagen_vida[1];
            vida4.sprite=imagen_vida[2];
            break;
        case "Fin":
            UnityEngine.Object.Destroy(vColisionando.gameObject);
            meta=true;
            GetComponent.<Rigidbody2D>().velocity=velCol;
            break;
        }
}
function cambiarsalto(numerito:double){
    fuerza_y=numerito;
}