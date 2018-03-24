using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Scr_Carta : MonoBehaviour {

    [SerializeField]
    private float velocidad;

    private int tipo;

    public int Tipo
    {
        get { return tipo; }
        set { tipo = value; }
    }

    // Use this for initialization
    void Start () {
        this.name = "Carta";
	}
	
	// Update is called once per frame
	void Update () {
        Movimiento();
    }

    public void Movimiento()
    {
        if(tipo == 1)
        {
            this.transform.Translate(-velocidad * Time.deltaTime, 0, 0);
        }
        
        if(tipo == 2)
        {
            this.transform.Translate(-velocidad * Time.deltaTime, -velocidad * Time.deltaTime, 0);
        }

        if (tipo == 3)
        {
            this.transform.Translate(-velocidad * Time.deltaTime, velocidad * Time.deltaTime, 0);
        }
    }
}
