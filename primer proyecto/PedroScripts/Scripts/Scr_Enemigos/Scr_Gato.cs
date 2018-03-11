using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Scr_Gato : Scr_Generico_Enemigo {

	[SerializeField]
	private float velocidad;

	private Animator animGato;

	// Use this for initialization
	void Start () {
        this.name = "Obj_Gato";

        //Fijos
        Camara = GameObject.FindGameObjectWithTag ("MainCamera");
		RbMio = this.GetComponent<Rigidbody2D> ();
		MeMuevo = false;

		//Propios
		animGato = this.GetComponent<Animator> ();
	}
	
	// Update is called once per frame
	void Update () {
		ProcedeAMoverte ();
	}

	public override void Movimiento(){
		this.transform.Translate(-velocidad * Time.deltaTime,0,0);
		animGato.SetBool ("Ataque", true);
	}
}
