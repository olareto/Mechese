using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Scr_RataPija : Scr_Generico_Enemigo {

	[SerializeField]
	private float velocidad;

	// Use this for initialization
	void Start () {
        this.name = "Obj_RataPija";

		//Fijos
		Camara = GameObject.FindGameObjectWithTag ("MainCamera");
		RbMio = this.GetComponent<Rigidbody2D> ();
		MeMuevo = false;
	}
	
	// Update is called once per frame
	void Update () {
		ProcedeAMoverte ();
	}

	public override void Movimiento(){
        this.transform.Translate(-velocidad * Time.deltaTime, 0, 0);
	}
}
