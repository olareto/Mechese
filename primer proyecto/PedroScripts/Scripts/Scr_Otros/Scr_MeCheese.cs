using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Scr_MeCheese : MonoBehaviour {

    [SerializeField]
    private float distanciaMeAlBorde;

    [SerializeField]
	private float fuerzaSalto;

	[SerializeField]
	private float velocidad;

	[SerializeField]
	private float distanciaGolpeado;

    [SerializeField]
    private float tiempoInvulnerable;

    [SerializeField]
    private float margenDesplazamiento;

    [SerializeField]
    private GameObject pfPolvo;

    private GameObject objCamara;
	private Rigidbody2D rbMe;
	private Animator animMe;

    private float xInicialCamara;
    private float yInicialCamara;
    private bool despVertCamaraSubida;
    private bool despVertCamaraBajada;

    private int salto;
	private bool golpeado;
	private bool meMuevo;
	private bool invulnerable;

    private int vidas;
    private int monedas;
    private bool berserk;
    
    public int Vidas
    {
        get
        {
            return vidas;
        }

        set
        {
            vidas = value;
        }
    }

    public int Monedas
    {
        get { return monedas; }
        set { monedas = value; }
    }


    // Use this for initialization
    void Start () {
		objCamara = GameObject.FindGameObjectWithTag("MainCamera");
        objCamara.transform.Translate(-distanciaMeAlBorde, 0, 0);
		rbMe = this.GetComponent<Rigidbody2D> ();
		animMe = this.GetComponent<Animator> ();

		salto = 0;
		golpeado = false;
		meMuevo = true;
        Vidas = 3;
        monedas = 0;
        berserk = false;

		xInicialCamara = objCamara.transform.position.x;
		yInicialCamara = objCamara.transform.position.y;
        despVertCamaraSubida = false;
        despVertCamaraBajada = false;
    }
	
	// Update is called once per frame
	void Update () {
        MovimientoCamaraYMe();
		if (rbMe.velocity.y < - 0.1 && golpeado == false && berserk == false) {          
            this.animMe.SetInteger("TransMe", 3); //Cayendo
		}
		if (Input.anyKeyDown && golpeado == false) {
			Salto ();
		}

        Desplazado();
    }

	public void Salto(){
		if (this.salto < 2){ // && this.parado != false) {
			rbMe.velocity = new Vector2 (0, 0);
			rbMe.AddForce (new Vector2 (0, fuerzaSalto * 100 ));
			salto += 1;
            if(berserk == false)
            {
                this.animMe.SetInteger("TransMe", salto); //Salto 1 o salto 2
            }			
		}
	}

	public void OnTriggerEnter2D(Collider2D colTr) {
		string nombreColTr = colTr.gameObject.name;

        if (nombreColTr == "Obj_Moneda")
        {
            Destroy(colTr.gameObject);
            monedas++;
        }

        if (nombreColTr == "Obj_Botiquin")
        {
            Destroy(colTr.gameObject);
            vidas++;
        }

        if (nombreColTr == "Obj_PowerUP")
        {
            Destroy(colTr.gameObject);
            //Berserk
            animMe.SetInteger("TransMe", 6);
            berserk = true;
            this.velocidad += 50;
        }

        if (berserk == false)
        {
            if (golpeado == false &&
                (
                    nombreColTr == "Obj_RataPija" ||
                    nombreColTr == "Obj_Pajaro" ||
                    nombreColTr == "Obj_Perro" ||
                    nombreColTr == "Obj_Gato" ||
                    nombreColTr == "Obj_Cartero" ||
                    nombreColTr == "Obj_Carta"
                )
            )
            {
                if (this.invulnerable == false)
                {
                    golpeado = true;
                    Vidas--;
                    this.animMe.SetInteger("TransMe", 4); //Dañado
                    StartCoroutine("EnumGolpeado");
                }
            }
        }
        else
        {
            if (golpeado == false &&
                (
                    nombreColTr == "Obj_RataPija" ||
                    nombreColTr == "Obj_Pajaro" ||
                    nombreColTr == "Obj_Perro" ||
                    nombreColTr == "Obj_Gato" ||
                    nombreColTr == "Obj_Cartero"
                    //nombreColTr == "Obj_Carta"
                )
            )
            {
                Destroy(colTr.gameObject);
                GameObject objPolvo = Instantiate(pfPolvo);
                objPolvo.transform.position = new Vector3(colTr.transform.position.x, colTr.transform.position.y, colTr.transform.position.z);
            }
        }
        
	}

	//Colisiones
	public void OnCollisionEnter2D(Collision2D colisionador){
		string nombreColisionador = colisionador.gameObject.name;

		if (nombreColisionador == "Obj_Suelo") {
			rbMe.velocity = new Vector2 (0, 0);
			salto = 0;
			if (golpeado == false) {
                if (berserk == false)
                {
                    this.animMe.SetInteger("TransMe", 0); //Corriendo
                }                   
			}
		}

        if (
                nombreColisionador == "Obj_Alfeizar" ||
                nombreColisionador == "Obj_Caja" ||
                nombreColisionador == "Obj_Caja2" ||
                nombreColisionador == "Obj_CajaMadera"
            )
        {
            salto = 0;
            if (berserk == false)
            {
                this.animMe.SetInteger("TransMe", 0); //Corriendo
            }              
        }

    }

	public void MovimientoCamaraYMe(){
		if (meMuevo == true) {
            //Movimiento horizontal
            //Camara
            objCamara.transform.Translate(velocidad*Time.deltaTime, 0, 0);
            //MeCheese
            this.transform.Translate(velocidad*Time.deltaTime, 0, 0);
        }

        //Movimiento vertical
        //Camara
        float velDesplCamara = 4;  
        if (this.transform.position.y > 100)
        {
            if (objCamara.transform.position.y < this.transform.position.y - 5)
            {
                despVertCamaraSubida = true;
            }
            else
            {
                despVertCamaraSubida = false;
            }

            if (despVertCamaraSubida == true)
            {
                objCamara.transform.Translate(0, velDesplCamara, 0);
            }

            if (despVertCamaraSubida == false)
            {
                //Altura del MeCheese
                objCamara.transform.position = new Vector3(objCamara.transform.position.x, this.transform.position.y, objCamara.transform.position.z);
            }
        }
        else
        {
            if (objCamara.transform.position.y > yInicialCamara + 5)
            {
                if (this.transform.position.y < 40)
                {
                    if (objCamara.transform.position.y > yInicialCamara)
                    {
                        despVertCamaraBajada = true;
                    }
                    else
                    {
                        despVertCamaraBajada = false;
                        objCamara.transform.position = new Vector3(objCamara.transform.position.x, yInicialCamara, objCamara.transform.position.z);
                    }

                    if (despVertCamaraBajada == true)
                    {
                        objCamara.transform.Translate(0, -velDesplCamara, 0);
                    }                   
                }
                else
                {
                    //Altura del MeCheese
                    objCamara.transform.position = new Vector3(objCamara.transform.position.x, this.transform.position.y, objCamara.transform.position.z);
                }
            }                   
        }      
    }

	public IEnumerator EnumGolpeado(){
        float posicionCaida = objCamara.transform.position.x - xInicialCamara - distanciaGolpeado;
        this.transform.position = new Vector2(posicionCaida, objCamara.transform.position.y);
        meMuevo = false;
        invulnerable = true;
        if (Vidas == 0)
        {
            yield return new WaitForSeconds(1f);
            this.animMe.SetInteger("TransMe", 5); //Muerto            
        } else
        {
            StartCoroutine("EnumInvulnerable");
            yield return new WaitForSeconds(1.5f);
            animMe.SetInteger("TransMe", 0); //Corriendo
            rbMe.velocity = new Vector2(0, 0);
            rbMe.AddForce(new Vector2(4500, 0));
            yield return new WaitForSeconds(0.2f);
            this.transform.position = new Vector2(objCamara.transform.position.x - xInicialCamara, objCamara.transform.position.y - yInicialCamara);

            meMuevo = true;
            golpeado = false;
        }             
	}

    public IEnumerator EnumInvulnerable()
    {
        Color colorInv = this.GetComponent<SpriteRenderer>().color;
        colorInv.a = 0;
        Color colorVis = this.GetComponent<SpriteRenderer>().color;
        colorVis.a = 1;

        float momentoGolpe = Time.time;
        float tiempoAlpha = 0.1f;
        while (Time.time - momentoGolpe < tiempoInvulnerable)
        {
            this.GetComponent<SpriteRenderer>().color = colorInv;
            if (Time.time - momentoGolpe < tiempoInvulnerable)
            {
                yield return new WaitForSeconds(tiempoAlpha);
            }

            this.GetComponent<SpriteRenderer>().color = colorVis;
            if (Time.time - momentoGolpe < tiempoInvulnerable)
            {
                yield return new WaitForSeconds(tiempoAlpha);
            }
        }

        invulnerable = false;
        
    }

    public void Desplazado()
    {
        if (this.transform.position.x < objCamara.transform.position.x - xInicialCamara)
        {
            if (this.transform.position.x < objCamara.transform.position.x - xInicialCamara - margenDesplazamiento)
            {
                if (this.invulnerable == false && berserk == false)
                {
                    golpeado = true;
                    Vidas--;
                    this.animMe.SetInteger("TransMe", 4); //Dañado           
                    StartCoroutine("EnumGolpeado");
                }
            } else
            {
                StartCoroutine("VolverASituar");
            }
        }            
    }

    public IEnumerator VolverASituar()
    {
        yield return new WaitForSeconds(0.5f);
        if (golpeado == false)
        {            
            this.transform.position = new Vector2(objCamara.transform.position.x - xInicialCamara, this.transform.position.y);
        }
        
    }
}
