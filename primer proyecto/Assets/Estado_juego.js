#pragma strict

var contador_muertesTotal:int;

var contador_muertesM1N1:int;

var contador_muertesM1N2:int;

var contador_muertesM1N3:int;



var contador_muertesM1N1_pasado:int;

var contador_muertesM1N2_pasado:int;

var contador_muertesM1N3_pasado:int;





public var nombrearchivo:String;

var monedas:int;

var Ultimo_mundo:String;
public static var estadojuego:Estado_juego;

function Awake () {



	Screen.autorotateToLandscapeLeft=false;
	Screen.autorotateToLandscapeRight=false;
	Screen.autorotateToPortrait=false;
	Screen.autorotateToPortraitUpsideDown=false;
	Screen.orientation=ScreenOrientation.LandscapeLeft;




if(estadojuego==null)
{
estadojuego=this;
}
else if(estadojuego!=this)
{
UnityEngine.Object.Destroy(this.gameObject);
}
cargar ();
DontDestroyOnLoad(this.gameObject);
}
public function SetUltimo_mundo(ola:String):void
{
Ultimo_mundo=ola;
}
public function sumar_moneda():void
{
monedas++;
//guardar();
}
function guardar () {

PlayerPrefs.SetInt("monedas",monedas);

PlayerPrefs.SetInt("contador_muertesM1N1",contador_muertesM1N1);

PlayerPrefs.SetInt("contador_muertesM1N2",contador_muertesM1N2);

PlayerPrefs.SetInt("contador_muertesM1N3",contador_muertesM1N3);

PlayerPrefs.SetInt("contador_muertesTotal",contador_muertesTotal);

PlayerPrefs.SetInt("contador_muertesM1N1_pasado",contador_muertesM1N1_pasado);

PlayerPrefs.SetInt("contador_muertesM1N2_pasado",contador_muertesM1N2_pasado);

PlayerPrefs.SetInt("contador_muertesM1N3_pasado",contador_muertesM1N3_pasado);



}
function cargar () {
if(PlayerPrefs.HasKey("monedas"))
{
monedas=PlayerPrefs.GetInt("monedas");

contador_muertesM1N1=PlayerPrefs.GetInt("contador_muertesM1N1");

contador_muertesTotal=PlayerPrefs.GetInt("contador_muertesTotal");

contador_muertesM1N1_pasado=PlayerPrefs.GetInt("contador_muertesM1N1_pasado");

contador_muertesM1N2_pasado=PlayerPrefs.GetInt("contador_muertesM1N2_pasado");

contador_muertesM1N2=PlayerPrefs.GetInt("contador_muertesM1N2");

contador_muertesM1N3_pasado=PlayerPrefs.GetInt("contador_muertesM1N3_pasado");

contador_muertesM1N3=PlayerPrefs.GetInt("contador_muertesM1N3");


}
else{

monedas=0;

contador_muertesTotal=0;

contador_muertesM1N1=0;

contador_muertesM1N1_pasado=-1;

contador_muertesM1N2=0;

contador_muertesM1N2_pasado=-1;

contador_muertesM1N3=0;

contador_muertesM1N3_pasado=-1;

}
}
function nivel_pasado()
{
switch(Ultimo_mundo)
{
case "PrimerNivel":

if(contador_muertesM1N1_pasado==-1)
{
contador_muertesM1N1_pasado=contador_muertesM1N1;
}
break;
case "segundo_nivel":
if(contador_muertesM1N2_pasado==-1)
{
contador_muertesM1N2_pasado=contador_muertesM1N2;
}


break;
case "Malo:1":
if(contador_muertesM1N2_pasado==-1)
{
contador_muertesM1N3_pasado=contador_muertesM1N3;
}
break;
}





}
//contador_muertesM1N1_pasado

function unaMuerteMas()
{
contador_muertesTotal++;

switch(Ultimo_mundo)
{
case "PrimerNivel":
contador_muertesM1N1++;
break;
case "segundo_nivel":
contador_muertesM1N2++;
break;
case "Malo:1":
contador_muertesM1N3++;
break;
}

}

