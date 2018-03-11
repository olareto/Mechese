using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Scr_Perro : Scr_Generico_Enemigo {

	[SerializeField]
	private float velocidad;

	[SerializeField]
	private float fuerzaSalto;

	[SerializeField]
	private float distanciaParaSalto;

	private bool salto;
	private float yInicial;
	 

	// Use this for initialization
	void Start () {
        this.name = "Obj_Perro";

        //Fijos
        Camara = GameObject.FindGameObjectWithTag ("MainCamera");
		RbMio = this.GetComponent<Rigidbody2D> ();
		MeMuevo = false;

		//Propios
		salto = false;
		yInicial = this.transform.position.y;
	}
	
	// Update is called once per frame
	void Update () {
		ProcedeAMoverte ();
	}

	public override void Movimiento ()
	{
        this.transform.Translate(-velocidad * Time.deltaTime,0,0);
		if (salto == false && DistanciaAcamara<distanciaParaSalto) {
			RbMio.AddForce (new Vector2 (0, fuerzaSalto * 100));
			salto = true;
		}
		if (this.transform.position.y > yInicial) {
			RbMio.gravityScale = 40;
		} else {
			RbMio.gravityScale = 0;
			RbMio.velocity = new Vector2 (0, 0);
			this.transform.position = new Vector3 (this.transform.position.x, yInicial, this.transform.position.z);
		}
	}
}
