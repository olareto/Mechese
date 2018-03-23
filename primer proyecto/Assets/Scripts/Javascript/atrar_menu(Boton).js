#pragma strict
public var nombre_escena:String;

private var menu_principal:GameObject;
private var menu_principal_code:Menu_principal;




function Start () {

menu_principal=GameObject.Find("Menu_principal");
menu_principal_code=menu_principal.GetComponent(Menu_principal);

}



function Update () {
	if(Input.GetKey(KeyCode.Escape))
	{
this.transportar();
}
}




function transportar()
{
menu_principal_code.transportar(1);

}