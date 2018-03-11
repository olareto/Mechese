using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Scr_Generico_Enemigo : MonoBehaviour {

	//Fijos
	private bool meMuevo;
	private GameObject camara;
	private float distanciaAcamara;
	private Rigidbody2D rbMio;

	//Variables
	[SerializeField]
	private float distanciaParaActuar;

	//Get y Set
	public bool MeMuevo  
	{  
		get { return meMuevo; }  
		set { meMuevo = value; }  
	} 

	//Get y Set
	public GameObject Camara  
	{  
		get { return camara; }  
		set { camara = value; }  
	} 

	//Get y Set
	public float DistanciaAcamara  
	{  
		get { return distanciaAcamara; }  
		set { distanciaAcamara = value; }  
	} 

	//Get y Set
	public Rigidbody2D RbMio  
	{  
		get { return rbMio; }  
		set { rbMio = value; }  
	} 

	//Get y Set
	public float DistanciaParaActuar  
	{  
		get { return distanciaParaActuar; }  
		set { distanciaParaActuar = value; }  
	} 

	// Use this for initialization
	void Start () {
	}
	
	// Update is called once per frame
	void Update () {
	}

	public virtual void Movimiento(){
	}

	public void CalculaDistancia(){
		distanciaAcamara = this.transform.position.x - camara.transform.position.x;
		if (distanciaAcamara < distanciaParaActuar) {
			meMuevo = true;
		}
	}

	public void ProcedeAMoverte(){
		if (meMuevo == false) {
			CalculaDistancia ();
		} else {
			distanciaAcamara = this.transform.position.x - camara.transform.position.x;            
            Movimiento ();           
		}
	}
}
