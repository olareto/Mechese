using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Scr_Jefe1_Intro : MonoBehaviour {

    [SerializeField]
    private GameObject espada;

    [SerializeField]
    float velocidad;

    private bool parado;
    private bool choque;
    private bool chocado;
    private bool paradaEspada;
    private bool espadaCogida;
    private bool nosHemosIdo;
    private bool finIntro;

    private GameObject personaje;

    // Use this for initialization
    void Start () {
        parado = false;
        choque = false;
        chocado = false;
        paradaEspada = false;
        espadaCogida = false;
        nosHemosIdo = false;
        finIntro = false;
        personaje = GameObject.Find("Personaje");
        
    }
	
	// Update is called once per frame
	void Update () {
        if (parado == false || espadaCogida == true)
        {
            Movimiento();
        }

        if (choque == true)
        {
            if(chocado == false)
            {
                //Choque se hace una sola vez
                Choque();
            }
            else
            {
                if (paradaEspada == false)
                {
                    MovimientoEspada();
                }
                else
                {
                    if (espadaCogida == false)
                    {
                        CogemosEspada();
                    }
                }
            }
                
        }

        if (nosHemosIdo == true)
        {
            Resurreccion();
        }

        if (finIntro == true)
        {
            FinIntro();
        }


    }



    public void Movimiento()
    {
        float distPararse = 20;
        this.transform.Translate(velocidad * Time.deltaTime, 0, 0);
        if (this.transform.position.x >= personaje.transform.position.x)
        {
            choque = true;
        }

        if (choque == false)
        {
            personaje.GetComponent<Scr_Personaje>().MovimientoLento();
        }

        if (this.transform.position.x >= personaje.transform.position.x + distPararse)
        {
            if (espadaCogida == false)
            {
                parado = true;
            }
            else
            {
                parado = false;

                //Ya nos hemos ido lejos
                if (this.transform.position.x >= personaje.transform.position.x + distPararse * 1.5)
                {
                    nosHemosIdo = true;
                }

                if (this.transform.position.x >= personaje.transform.position.x + distPararse * 2)
                {
                    finIntro = true;
                }
            }         
        }

    }

    public void MovimientoEspada()
    {
        float velocidad = 9f;
        float distPararse = 20f;

        //Horizontal
        espada.transform.position = new Vector3(espada.transform.position.x + velocidad * Time.deltaTime, espada.transform.position.y, espada.transform.position.z);
        if (espada.transform.position.x >= personaje.transform.position.x + distPararse)
        {
            paradaEspada = true;
        }

        //Vertical
        if (espada.transform.position.x <= personaje.transform.position.x + (distPararse / 2))
        {
            espada.transform.position = new Vector3(espada.transform.position.x, espada.transform.position.y + velocidad * Time.deltaTime, espada.transform.position.z);
        }
        else
        {
            espada.transform.position = new Vector3(espada.transform.position.x, espada.transform.position.y - velocidad * Time.deltaTime, espada.transform.position.z);
        }

        //Rotacion
        espada.transform.Rotate( new Vector3(0, 0, 10));
    }

    public void Choque()
    {
        espada = Instantiate(espada);
        espada.transform.position = new Vector3 (transform.position.x, transform.position.y + 2, transform.position.z);
        personaje.GetComponent<Scr_Personaje>().Sonido(1); //Daño
        personaje.GetComponent<Animator>().SetInteger("TransMe", 5); //Muerto
        chocado = true;
    }

    public void CogemosEspada()
    {
        GameObject.Destroy(espada.gameObject);
        this.GetComponentsInChildren<Animator>()[1].SetBool("cogido", true);
        espadaCogida = true;
    }

    public void Resurreccion()
    {
        personaje.GetComponent<Animator>().SetInteger("TransMe", 1); //Salto
    }

    public void FinIntro()
    {
        personaje.GetComponent<Animator>().SetInteger("TransMe", 0); //Corriendo
        personaje.GetComponent<Scr_Personaje>().Intro = true;
        personaje.GetComponent<Scr_Personaje>().Sonido(0); //Michi1_completa
        GameObject.Destroy(this.gameObject);
    }
}
