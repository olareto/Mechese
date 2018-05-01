using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Scr_CocktailMolotov : MonoBehaviour {

    [SerializeField]
    private GameObject fuego;

    [SerializeField]
    private float fuerza;

    [SerializeField]
    private float velocidad;

    // Use this for initialization
    void Start () {
        this.GetComponent<Rigidbody2D>().AddForce(new Vector2(0, fuerza * 100));
    }
	
	// Update is called once per frame
	void Update () {
        Movimiento();
        if (this.transform.position.y <= 2.6)
        {
            GameObject objFuego = Instantiate(fuego);
            objFuego.transform.position = new Vector3(this.transform.position.x, objFuego.transform.position.y, objFuego.transform.position.z);
            objFuego.name = "Fuego";
            Destroy(this.gameObject);
        }
    }

    public void Movimiento()
    {
        this.transform.Translate(velocidad * Time.deltaTime, 0, 0);
    }
}
