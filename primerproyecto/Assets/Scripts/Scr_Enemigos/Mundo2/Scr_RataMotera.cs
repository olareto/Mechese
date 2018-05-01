using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Scr_RataMotera : MonoBehaviour {
    
    [SerializeField]
    private float velocidad;

    [SerializeField]
    private float distanciaParaActuar;

    [SerializeField]
    private GameObject pfCocktailMolotov;

    private GameObject camara;

    private bool posicionAlcanzada;
    private bool meMuevo;

    private float xAlcanzada;

    // Use this for initialization
    void Start () {
        camara = GameObject.FindGameObjectWithTag("MainCamera");
        posicionAlcanzada = false;
    }
	
	// Update is called once per frame
	void Update () {
        CompruebaDistancia();
        if (meMuevo)
        {
            Movimiento();
        }
    }

    public void Movimiento()
    {
        if (this.transform.position.x <= camara.transform.position.x)
        {
            //Velocidad rapida
            this.transform.Translate(-velocidad * Time.deltaTime, 0, 0);
        }
        else
        {
            if (!posicionAlcanzada)
            {
                posicionAlcanzada = true;
                xAlcanzada = this.transform.position.x;
                GameObject cocktail = Instantiate(pfCocktailMolotov);
                cocktail.transform.position = new Vector3(transform.position.x+5, cocktail.transform.position.y, cocktail.transform.position.z);
            }
            else
            {
                if (this.transform.position.x - xAlcanzada < 20)
                {
                    //Velocidad como Mecheese
                    this.transform.Translate(-23 * Time.deltaTime, 0, 0);
                }
                else
                {
                    //Velocidad rapida
                    this.transform.Translate(-velocidad * Time.deltaTime, 0, 0);
                }
            }

        }
    }

    public void CompruebaDistancia()
    {
        float distanciaAcamara = this.transform.position.x - camara.transform.position.x;
        if (distanciaAcamara < distanciaParaActuar)
        {
            meMuevo = true;
            this.GetComponent<SpriteRenderer>().enabled = true;
            this.GetComponent<Collider2D>().enabled = true;
        }
    }
}
