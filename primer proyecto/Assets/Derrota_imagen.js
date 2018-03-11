#pragma strict
private var numero:float;
public var imagen_vida:Texture2D[];

function Start () {
	numero=Random.Range(0.0, 4.0);
	this.gameObject.GetComponent.<GUITexture>().texture=imagen_vida[numero];
}
