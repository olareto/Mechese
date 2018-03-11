using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class Scr_ControladorUI : MonoBehaviour {

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
    private GameObject txtMonedas;

    // Use this for initialization
    void Start () {
		
	}
	
	// Update is called once per frame
	void Update () {
        int vidas = this.GetComponent<Scr_MeCheese>().Vidas;

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

        if (vidas == 0)
        {
            imgVida3.SetActive(false);
            imgRaspa3.SetActive(true);
            imgVida2.SetActive(false);
            imgRaspa2.SetActive(true);
            imgVida1.SetActive(false);
            imgRaspa1.SetActive(true);
        }

        txtMonedas.GetComponent<Text>().text = GameObject.FindGameObjectWithTag("Player").GetComponent<Scr_MeCheese>().Monedas.ToString();
    }
}
