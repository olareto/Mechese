#pragma strict
var Datos_juego:GameObject;

var Dato:Estado_juego;

public var imagen_numero:Texture2D[];

private var moneda_unidad:GUITexture;
private var moneda_decena:GUITexture;
private var moneda_centena:GUITexture;
private var moneda_mil:GUITexture;
private var moneda_diezmil:GUITexture;
var moneda:int;
function Start () {
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
		Datos_juego=GameObject.Find("Datos_juego");

Dato=Datos_juego.GetComponent(Estado_juego);
moneda=Dato.monedas;
Mostrar(moneda);
//UnityEngine.Object.Destroy(this.gameObject);

}
function Mostrar(monedas:int):void{

var monedas_unidad:int;
var monedas_decena:int;
var monedas_centena:int;
var monedas_mil:int;
var monedas_diezmil:int;

monedas_diezmil=monedas /10000;
monedas_mil=(monedas - (monedas_diezmil*10000))/1000;
monedas_centena=(monedas - (monedas_diezmil*10000)-(monedas_mil*1000))/100;
monedas_decena=(monedas - (monedas_diezmil*10000)-(monedas_mil*1000)-(monedas_centena*100))/10;
monedas_unidad=(monedas - (monedas_diezmil*10000)-(monedas_mil*1000)-(monedas_centena*100)-(monedas_decena*10));


moneda_diezmil.texture=imagen_numero[monedas_diezmil];
moneda_mil.texture=imagen_numero[monedas_mil];
moneda_centena.texture=imagen_numero[monedas_centena];
moneda_decena.texture=imagen_numero[monedas_decena];
moneda_unidad.texture=imagen_numero[monedas_unidad];



}
