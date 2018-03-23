using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Scr_Pajaro : Scr_Generico_Enemigo {

	[SerializeField]
    [Tooltip("Valor de 0 a 20")]
    private float velCaida;

	[SerializeField]
    [Tooltip("Valor de 0 a 15")]
    private float velSubida;

	[SerializeField]
    [Tooltip("Valor de 0 a 10")]
    private float velRecto;

    [SerializeField]
    [Tooltip("Valor de 0 a 8")]
    private float distBajada;

    private float yInicial;
	private bool bajamos;
    private bool hasHechoSonido;

    // Use this for initialization
    void Start () {
        this.name = "Pajaro";

        //Fijos
        Camara = GameObject.FindGameObjectWithTag ("MainCamera");
		MeMuevo = false;

		//Propios
		yInicial = this.transform.position.y;
		bajamos = true;
        hasHechoSonido = false;
    }
	
	// Update is called once per frame
	void Update () {
        if (MeMuevo == false)
        {
            Visto();
        }
        else
        {
            if (hasHechoSonido == false)
            {
                HazSonido();
            }
            Movimiento();
        }
    }

	public override void Movimiento(){
		float bajada = yInicial - this.transform.position.y; 
		if (bajada < distBajada && bajamos == true) {
            this.transform.Translate(-velRecto * Time.deltaTime, 0, 0);
            this.transform.Translate(0, -velCaida * Time.deltaTime, 0);
        } else {
			bajamos = false;
            this.transform.Translate(-velRecto * Time.deltaTime, velSubida * Time.deltaTime, 0);
        }
	}

    public void HazSonido()
    {
        this.GetComponent<AudioSource>().Play();
        hasHechoSonido = true;
    }
}