#pragma strict
public var nombre_escena:String;



function Update () {
	if(Input.GetKey(KeyCode.Escape))
	{
this.transportar();
}
}




function transportar()
{
if(nombre_escena!="cierre")
{
Application.LoadLevel(nombre_escena);
}
else{
Application.Quit();
}
}