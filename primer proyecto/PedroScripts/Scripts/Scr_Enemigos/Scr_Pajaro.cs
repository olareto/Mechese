using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Scr_Pajaro : Scr_Generico_Enemigo {

	[SerializeField]
	private float velCaida;
	[SerializeField]
	private float velSubida;
	[SerializeField]
	private float velRecto;
    [SerializeField]
    private float distBajada;

    private float bajada;
	private float yInicial;
	private bool bajamos;

	// Use this for initialization
	void Start () {
        this.name = "Obj_Pajaro";

        //Fijos
        Camara = GameObject.FindGameObjectWithTag ("MainCamera");
		RbMio = this.GetComponent<Rigidbody2D> ();
		MeMuevo = false;

		//Propios
		bajada = 0;
		yInicial = this.transform.position.y;
		bajamos = true;
		
	}
	
	// Update is called once per frame
	void Update () {
		ProcedeAMoverte ();
	}

	public override void Movimiento(){
		bajada = yInicial - this.transform.position.y; 
		if (bajada < distBajada && bajamos == true) {
            this.transform.Translate(-velRecto * Time.deltaTime, 0, 0);
            this.transform.Translate(0, -velCaida * Time.deltaTime, 0);
        } else {
			bajamos = false;
            this.transform.Translate(-velRecto * Time.deltaTime, velSubida * Time.deltaTime, 0);
        }
	}
}