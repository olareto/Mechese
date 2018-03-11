#pragma strict




var niveles:GameObject[];







var subida:boolean;
var fases:int;
var empezar:int;
var terminar:int;
//var touch:Touch;
//var touch_acabar:Touch;
var diferencia:int;
var derecha:boolean;
var izquierda:boolean;
var contador:int; 
var contador_max:int; 
var pantalla_actual:int;

var contador_animacion:int; 
var contador_animacion_max:int; 




function Start () {
subida=false;
fases=1;
pantalla_actual=0;
empezar=0;
terminar=0;
contador_max=25;
contador=26;

contador_animacion_max=5;
contador_animacion=6;

}

function Update () {
////////
/**
Principal:
x=224.3
y=75.6
W=155.7
H=219.4
derecha:
x=453.1
y=75.6
W=54.9
H=77.4
izquierda:
x=108.2
y=75.6
W=54.9
H=77.4
**/
////////7
if(contador<=contador_max)
{
contador++;
}
else{
 for (var touch : Touch in Input.touches) {
        if (touch.phase == TouchPhase.Began) {
            //var ray = Camera.main.ScreenPointToRay (touch.position);
        	//touch = Input.GetTouch(0);
			empezar=touch.position.x;
        }
        
        if(touch.phase==TouchPhase.Ended)
	{
	//touch_acabar = Input.GetTouch(0);
	terminar=touch.position.x;
	diferencia=terminar-empezar;
	//
	if(Mathf.Abs(diferencia)>5)
	{
	
	if(terminar>empezar)
	{
	//derecha

	izquierda=true;
	contador=0;
	fases=1;

	}
	else
	{
	//izquierda
	derecha=true;
	contador=0;
	fases=1;

	}
	}
	//
	}          
        
    }
    }
    if(derecha==true)
    {
    if(pantalla_actual==7 && subida==false)
{

contador=contador_max+1;
derecha=false;

}
else if (subida==false){

subida=true;
//niveles[pantalla_actual-1] 
pantalla_actual++;

}
else{

if(contador_animacion_max>contador_animacion)
{
contador_animacion++;
}
else
{
contador_animacion=0;


derecha_centro(pantalla_actual);
//niveles[pantalla_actual]

centro_izquierda(pantalla_actual-1);
//niveles[pantalla_actual+1]
fases++;
if(fases==5)
{
fases=1;
derecha=false;
subida=false;
}

}
}
    
    }
     if(izquierda==true)
    {
    if(pantalla_actual==0&&subida==false)
{
contador=contador_max+1;
izquierda=false;

}
else if (subida==false){

subida=true;
//niveles[pantalla_actual-1] 
pantalla_actual--;

}
else{
if(contador_animacion_max>contador_animacion)
{
contador_animacion++;
}
else
{
contador_animacion=0;



izquierda_centro(pantalla_actual);
//niveles[pantalla_actual]


//if(pantalla_actual!=0)
//{
centro_derecha(pantalla_actual+1);
//niveles[pantalla_actual+1]
//}


fases++;
if(fases==5)
{
fases=1;
izquierda=false;
subida=false;
}
}
}
    
}

    
}
    
    
    
    
    


function derecha_centro(numero:int)
{




switch(fases)
{
case 1:
niveles[numero].gameObject.GetComponent.<GUITexture>().pixelInset.x=xfinal(416.4);
niveles[numero].gameObject.GetComponent.<GUITexture>().pixelInset.width=xfinal(70.9);
//niveles[numero].gameObject.guiTexture.pixelInset.y=yfinal(0);
niveles[numero].gameObject.GetComponent.<GUITexture>().pixelInset.height=yfinal(110.6);
break;
case 2:
niveles[numero].gameObject.GetComponent.<GUITexture>().pixelInset.x=xfinal(343.3);
niveles[numero].gameObject.GetComponent.<GUITexture>().pixelInset.width=xfinal(113.4);
niveles[numero].gameObject.GetComponent.<GUITexture>().pixelInset.height=yfinal(158.3);
break;
case 3:
niveles[numero].gameObject.GetComponent.<GUITexture>().pixelInset.x=xfinal(274.9);
niveles[numero].gameObject.GetComponent.<GUITexture>().pixelInset.width=xfinal(141.9);
niveles[numero].gameObject.GetComponent.<GUITexture>().pixelInset.height=yfinal(193.7);
break;
case 4:
niveles[numero].gameObject.GetComponent.<GUITexture>().pixelInset.x=xfinal(224.3);
niveles[numero].gameObject.GetComponent.<GUITexture>().pixelInset.width=xfinal(155.7);
niveles[numero].gameObject.GetComponent.<GUITexture>().pixelInset.height=yfinal(219.4);
break;

}
}




function centro_derecha(numero:int)
{
niveles[numero].gameObject.transform.position.z=(7-numero);





switch(fases)
{
case 1:

niveles[numero].gameObject.GetComponent.<GUITexture>().pixelInset.x=xfinal(274.9);
niveles[numero].gameObject.GetComponent.<GUITexture>().pixelInset.width=xfinal(141.9);
niveles[numero].gameObject.GetComponent.<GUITexture>().pixelInset.height=yfinal(193.7);

break;
case 2:
niveles[numero].gameObject.GetComponent.<GUITexture>().pixelInset.x=xfinal(343.3);
niveles[numero].gameObject.GetComponent.<GUITexture>().pixelInset.width=xfinal(113.4);
niveles[numero].gameObject.GetComponent.<GUITexture>().pixelInset.height=yfinal(158.3);
break;
case 3:
niveles[numero].gameObject.GetComponent.<GUITexture>().pixelInset.x=xfinal(416.4);
niveles[numero].gameObject.GetComponent.<GUITexture>().pixelInset.width=xfinal(70.9);
//niveles[numero].gameObject.guiTexture.pixelInset.y=yfinal(0);
niveles[numero].gameObject.GetComponent.<GUITexture>().pixelInset.height=yfinal(110.6);
break;
case 4:
niveles[numero].gameObject.GetComponent.<GUITexture>().pixelInset.x=xfinal(453.1);
niveles[numero].gameObject.GetComponent.<GUITexture>().pixelInset.width=xfinal(54.9);
//niveles[numero].gameObject.guiTexture.pixelInset.y=yfinal(0);
niveles[numero].gameObject.GetComponent.<GUITexture>().pixelInset.height=yfinal(77.4);
break;

}
}







function izquierda_centro(numero:int)
{
switch(fases)
{
case 1:
niveles[numero].gameObject.GetComponent.<GUITexture>().pixelInset.x=xfinal(70);
niveles[numero].gameObject.GetComponent.<GUITexture>().pixelInset.width=xfinal(70.9);
//niveles[numero].gameObject.guiTexture.pixelInset.y=yfinal(0);
niveles[numero].gameObject.GetComponent.<GUITexture>().pixelInset.height=yfinal(110.6);
break;
case 2:
niveles[numero].gameObject.GetComponent.<GUITexture>().pixelInset.x=xfinal(109.6);
niveles[numero].gameObject.GetComponent.<GUITexture>().pixelInset.width=xfinal(113.4);
niveles[numero].gameObject.GetComponent.<GUITexture>().pixelInset.height=yfinal(158.3);
break;
case 3:
niveles[numero].gameObject.GetComponent.<GUITexture>().pixelInset.x=xfinal(138.2);
niveles[numero].gameObject.GetComponent.<GUITexture>().pixelInset.width=xfinal(141.9);
niveles[numero].gameObject.GetComponent.<GUITexture>().pixelInset.height=yfinal(193.7);
break;
case 4:
niveles[numero].gameObject.GetComponent.<GUITexture>().pixelInset.x=xfinal(224.3);
niveles[numero].gameObject.GetComponent.<GUITexture>().pixelInset.width=xfinal(155.7);
niveles[numero].gameObject.GetComponent.<GUITexture>().pixelInset.height=yfinal(219.4);
break;

}



}

function centro_izquierda(numero:int)
{
niveles[numero].gameObject.transform.position.z=numero;

switch(fases)
{
case 1:

niveles[numero].gameObject.GetComponent.<GUITexture>().pixelInset.x=xfinal(138.2);
niveles[numero].gameObject.GetComponent.<GUITexture>().pixelInset.width=xfinal(141.9);
niveles[numero].gameObject.GetComponent.<GUITexture>().pixelInset.height=yfinal(193.7);

break;
case 2:
niveles[numero].gameObject.GetComponent.<GUITexture>().pixelInset.x=xfinal(109.6);
niveles[numero].gameObject.GetComponent.<GUITexture>().pixelInset.width=xfinal(113.4);
niveles[numero].gameObject.GetComponent.<GUITexture>().pixelInset.height=yfinal(158.3);
break;
case 3:
niveles[numero].gameObject.GetComponent.<GUITexture>().pixelInset.x=xfinal(70);
niveles[numero].gameObject.GetComponent.<GUITexture>().pixelInset.width=xfinal(70.9);
//niveles[numero].gameObject.guiTexture.pixelInset.y=yfinal(0);
niveles[numero].gameObject.GetComponent.<GUITexture>().pixelInset.height=yfinal(110.6);
break;
case 4:
niveles[numero].gameObject.GetComponent.<GUITexture>().pixelInset.x=xfinal(49.6);
niveles[numero].gameObject.GetComponent.<GUITexture>().pixelInset.width=xfinal(54.9);
//niveles[numero].gameObject.guiTexture.pixelInset.y=yfinal(0);
niveles[numero].gameObject.GetComponent.<GUITexture>().pixelInset.height=yfinal(77.4);
break;

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

