using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using UnityEngine.SceneManagement;

public class Scr_ControlUI : MonoBehaviour {

    [SerializeField]
    private GameObject imgVida1;

    [SerializeField]
    private GameObject imgVida2;

    [SerializeField]
    private GameObject imgVida3;

    [SerializeField]
    private GameObject imgRaspa1;

    [SerializeField]
    private GameObject imgRaspa2;

    [SerializeField]
    private GameObject imgRaspa3;

    [SerializeField]
    private GameObject imgVidaExtra;

    [SerializeField]
    private GameObject imgMoneda_Unidad;

    [SerializeField]
    private GameObject imgMoneda_Decena;

    [SerializeField]
    private Sprite[] sprNumero;

    //[SerializeField]
    //private GameObject canvas;

    [SerializeField]
    private GameObject contenedorVidas;

    [SerializeField]
    private GameObject contenedorGameOver;

    [SerializeField]
    private GameObject contenedorFelicitacion;

    private GameObject personaje;

    

    // Use this for initialization
    void Start () {
        personaje = GameObject.FindGameObjectWithTag("Player");
	}

    // Update is called once per frame
    void Update() {
        if (personaje.GetComponent<Scr_Personaje>().Intro == true)
        {
            //canvas.SetActive(true);
            int vidas = personaje.GetComponent<Scr_Personaje>().Vidas;
            if (vidas >= 1)
            {
                if (personaje.GetComponent<Scr_Personaje>().Meta == false)
                {
                    contenedorVidas.SetActive(true);
                    if (vidas == 4)
                    {
                        imgVidaExtra.SetActive(true);
                        imgVida3.SetActive(true);
                        imgRaspa3.SetActive(false);
                    }

                    if (vidas == 3)
                    {
                        imgVidaExtra.SetActive(false);
                        imgVida3.SetActive(true);
                        imgRaspa3.SetActive(false);
                    }

                    if (vidas == 2)
                    {
                        imgVida3.SetActive(false);
                        imgRaspa3.SetActive(true);
                        imgVida2.SetActive(true);
                        imgRaspa2.SetActive(false);
                    }

                    if (vidas == 1)
                    {
                        imgVida3.SetActive(false);
                        imgRaspa3.SetActive(true);
                        imgVida2.SetActive(false);
                        imgRaspa2.SetActive(true);
                        imgVida1.SetActive(true);
                        imgRaspa1.SetActive(false);
                    }

                    /*if (vidas == 0)
                    {
                        imgVida3.SetActive(false);
                        imgRaspa3.SetActive(true);
                        imgVida2.SetActive(false);
                        imgRaspa2.SetActive(true);
                        imgVida1.SetActive(false);
                        imgRaspa1.SetActive(true);
                    }*/

                    //txtMonedas.GetComponent<Text>().text = GameObject.FindGameObjectWithTag("Player").GetComponent<Scr_Personaje>().Monedas.ToString();
                    int unidades = personaje.GetComponent<Scr_Personaje>().Monedas % 10;
                    int decenas = (int)personaje.GetComponent<Scr_Personaje>().Monedas / 10;

                    imgMoneda_Unidad.GetComponent<Image>().sprite = sprNumero[unidades];
                    imgMoneda_Decena.GetComponent<Image>().sprite = sprNumero[decenas];
                }
                else
                //Hemos llegado a la meta
                {
                    contenedorFelicitacion.SetActive(true);
                    contenedorVidas.SetActive(false);
                }

            }
            else
            //Hemos muerto
            {
                contenedorGameOver.SetActive(true);
                contenedorVidas.SetActive(false);
            }
        }
    }

    public void ClickRestart()
    {
        SceneManager.LoadScene(SceneManager.GetActiveScene().name);
    }
}
