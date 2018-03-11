using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Scr_Carta : MonoBehaviour {

    [SerializeField]
    private float velocidad;

	// Use this for initialization
	void Start () {
        this.name = "Obj_Carta";
	}
	
	// Update is called once per frame
	void Update () {
        this.transform.Translate(-velocidad * Time.deltaTime, 0, 0);
    }
}
