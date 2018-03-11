using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Scr_Cartero : Scr_Generico_Enemigo {

    [SerializeField]
    private GameObject pfCarta;

    private Animator animCartero;

    private bool ataque;

	// Use this for initialization
	void Start () {
        this.name = "Obj_Cartero";

        //Fijos
        Camara = GameObject.FindGameObjectWithTag ("MainCamera");
		RbMio = this.GetComponent<Rigidbody2D> ();
		MeMuevo = false;

		//Propios
		animCartero = this.GetComponent<Animator>();

        ataque = false;
	}
	
	// Update is called once per frame
	void Update () {
		ProcedeAMoverte ();
	}

	public override void Movimiento(){
        if(ataque == false)
        {
            ataque = true;
            animCartero.SetBool("Ataque", true);
            StartCoroutine("EnumLanzaCartas");
        }
		
	}

    IEnumerator EnumLanzaCartas()
    {
        int contador = 0;
        int contador2 = 0;
        while (contador2 < 4)
        {
            contador2++;
            while (contador < 4)
            {
                contador++;
                yield return new WaitForSeconds(0.1f);
                GameObject objCarta = Instantiate(pfCarta);
                objCarta.transform.position = new Vector3(this.transform.position.x-12, this.transform.position.y, this.transform.position.z);
            }
            yield return new WaitForSeconds(0.4f);
            contador = 0;
        }
    }
}
