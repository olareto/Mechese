using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;

public class Scr_Personaje : MonoBehaviour {

    [SerializeField]
	private float fuerzaSalto;

	[SerializeField]
	private float velocidad;

    [SerializeField]
    private float tiempoInvulnerable;

    [SerializeField]
    private GameObject pfPolvo;

    [SerializeField]
    private float posicionMeta; //1550 en Mundo1_1

    private GameObject objCamara;
	private Rigidbody2D rbMe;
	private Animator animMe;

    private float yInicialCamara;
    private float separacionx;
    
    private int salto;
    private int vidas;
    private int monedas;

    private bool golpeado;
	private bool meMuevo;
	private bool invulnerable;
    private bool berserk;
    private bool intro;
    private bool meta;
    private bool heTocado;
    private bool saltoTrampolin;

    [SerializeField]
    private GameObject objSonidosMonedas;

    public bool Intro
    {
        get { return intro; }
        set { intro = value; }
    }

    public bool Meta
    {
        get { return meta; }
        set { meta = value; }
    }

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
             
		rbMe = this.GetComponent<Rigidbody2D> ();
		animMe = this.GetComponent<Animator> ();

		salto = 0;

        vidas = 3;
        if (SceneManager.GetActiveScene().name == "Esc_Mundo1_3")
        {
            vidas = 1;
        }
        monedas = 0;

        golpeado = false;
        meMuevo = true;
        berserk = false;
        meta = false;
        heTocado = false;
        saltoTrampolin = false;
        intro = false;
        StartCoroutine("FinIntro");

        yInicialCamara = objCamara.transform.position.y;
        separacionx = objCamara.transform.position.x - this.transform.position.x ;

        CambiaAnimacion(0); //Animacion Inicial Corriendo
    }
	
	// Update is called once per frame
	void Update () {
        if (intro == true)
        {
            MovimientoCamaraYMe();

            //Para ordenador
            if (Input.GetKeyDown("space") && !golpeado && !meta)
            {
                 Salto();
            }

            //Para movil
            if (Input.touchCount > 0 && !heTocado && !golpeado && !meta)
            {
                heTocado = true;
                Salto();
            }

            if (Input.touchCount == 0)
            {
                heTocado = false;
            }
        } 

        if (rbMe.velocity.y < -0.1 && golpeado == false && berserk == false)
        {
            Cayendo();
        }

        if (this.transform.position.x < objCamara.transform.position.x - separacionx)
        {
            Desplazado();
        }
    }

    public void Cayendo()
    {
        CambiaAnimacion(3); //Cayendo
    }

	public void Salto(){
        if (this.salto < 2){ // && this.parado != false) {
            //Para correccion
            this.transform.position = new Vector3(this.transform.position.x, this.transform.position.y+1f, this.transform.position.z);

            rbMe.velocity = new Vector2 (0, 0);
            rbMe.AddForce (new Vector2 (0, fuerzaSalto * 100 ));
			salto += 1;
            if(berserk == false)
            {
                CambiaAnimacion(salto); //Salto 1 o salto 2
            }
		}
	}

	public void OnTriggerEnter2D(Collider2D colTr) {

        if (meta == false)
        {
            string nombreColTr = colTr.gameObject.name;

            if (nombreColTr == "Moneda")
            {
                Destroy(colTr.gameObject);
                monedas++;
                SonidoMonedas();
            }

            if (nombreColTr == "Botiquin")
            {
                Sonido(3); //Sardina
                Destroy(colTr.gameObject);
                vidas++;
            }

            if (nombreColTr == "PowerUP")
            {
                Sonido(2); //Berserk
                Destroy(colTr.gameObject);
                CambiaAnimacion(6); //Berserk
                berserk = true;
                this.velocidad *= 2;
            }

            if (nombreColTr == "Vacio")
            {
                Sonido(4); //CaidaAlVacio
                golpeado = true;
                vidas = 0;
                PararSonido(0);
                meMuevo = false;
            }

            if (berserk == false)
            {
                //Ya no puedo saltar encima
                if (nombreColTr == "TuberiaJefeBase")
                {
                    colTr.GetComponentsInParent<Collider2D>()[1].enabled = false;
                }

                if (nombreColTr == "TuberiaJefe")
                {
                    colTr.gameObject.GetComponent<Scr_Tuberia>().LanzarAgua();
                    salto = 0;
                }

                if (golpeado == false &&
                    (
                        nombreColTr == "Periodico" ||
                        nombreColTr == "Carta" ||
                        nombreColTr == "RataPija" ||
                        nombreColTr == "Pajaro" ||
                        nombreColTr == "Perro" ||
                        nombreColTr == "GatoMalo" ||
                        nombreColTr == "Cartero" ||
                        nombreColTr == "BaseCaja" ||
                        nombreColTr == "ArbustoMalo" ||
                        nombreColTr == "Jefe_1"

                    )
                )
                {
                    if (this.invulnerable == false)
                    {
                        golpeado = true;
                        Vidas--;
                        if (vidas == 0)
                        {
                            PararSonido(0);
                        }
                        CambiaAnimacion(4); //Dañado
                        StartCoroutine("EnumGolpeado");
                    }

                    //Ya no puedo saltar encima
                    if (nombreColTr == "BaseCaja")
                    {
                        colTr.GetComponentsInParent<Collider2D>()[1].enabled = false;
                    }
                }
            }
            else
            {
                //Modo BERSERK
                if (golpeado == false &&
                    (
                        nombreColTr == "Carta" ||
                        nombreColTr == "RataPija" ||
                        nombreColTr == "Pajaro" ||
                        nombreColTr == "Perro" ||
                        nombreColTr == "GatoMalo" ||
                        nombreColTr == "Cartero"
                    )
                )
                {
                    Destroy(colTr.gameObject);
                    GameObject objPolvo = Instantiate(pfPolvo);
                    objPolvo.transform.position = new Vector3(colTr.transform.position.x, colTr.transform.position.y, colTr.transform.position.z);
                }
            }
        }
  	}

	//Colisiones
	public void OnCollisionEnter2D(Collision2D colisionador){
        string nombreColisionador = colisionador.gameObject.name;
        saltoTrampolin = false;

        if (nombreColisionador == "Suelo")
        {
            rbMe.velocity = new Vector2(0, 0);
            salto = 0;
            if (!golpeado && !berserk)
            {
                CambiaAnimacion(0); //Corriendo
            }
        }

        if (nombreColisionador == "BaseTrampolin")
        {
            saltoTrampolin = true;
        }

        if (
                nombreColisionador == "Alfeizar" ||
                nombreColisionador == "Tejado" ||
                nombreColisionador == "Caja" ||
                nombreColisionador == "Caja2" ||
                nombreColisionador == "CajaMadera"
            )
        {
            salto = 0;
            if (berserk == false)
            {
                CambiaAnimacion(0); //Corriendo
            }
        }	
    }

    //Solo para la intro
    public void MovimientoLento()
    {
        this.transform.Translate(velocidad/2 * Time.deltaTime, 0, 0);
        objCamara.transform.Translate(velocidad/2 * Time.deltaTime, 0, 0);
    }

	public void MovimientoCamaraYMe(){
        //Movimiento horizontal
        if (meMuevo == true) {
            //MeCheese
            this.transform.Translate(velocidad * Time.deltaTime, 0, 0);
            if (this.transform.position.x >= posicionMeta && posicionMeta!=-1)
            {
                LlegoMeta();
            }
            
            //Camara
            if (meta == false && vidas>=1)
            {
                objCamara.transform.Translate(velocidad * Time.deltaTime, 0, 0);
            }          
            
        }

        //Movimiento vertical
        //Camara
        bool despVertCamaraSubida = false;
        bool despVertCamaraBajada = false;
        float velDesplCamara = 50f;
        float alturaCambio = yInicialCamara + 11f; //18f en el Mundo1_1;
        float delta = 0.8f;
        if (this.transform.position.y > alturaCambio)
        {
            //Subiremos hasta seguir a MeCheese
            if (objCamara.transform.position.y < this.transform.position.y - delta)
            {
                despVertCamaraSubida = true;
            }
            else
            {
                despVertCamaraSubida = false;
            }

            if (despVertCamaraSubida == true)
            {
                objCamara.transform.Translate(0, velDesplCamara*Time.deltaTime, 0);
            }

            if (despVertCamaraSubida == false)
            {
                //Sigue a MeCheese
                objCamara.transform.position = new Vector3(objCamara.transform.position.x, this.transform.position.y, objCamara.transform.position.z);
            }
        }
        else
        {
            //Bajaremos hasta la yInicialCamara
            if (objCamara.transform.position.y > yInicialCamara + delta)
            {
                if (this.transform.position.y < alturaCambio/2)
                {
                    if (objCamara.transform.position.y > yInicialCamara+delta*2)
                    {
                        despVertCamaraBajada = true;
                    }
                    else
                    {
                        //Llegamos a la yInicialCamara
                        despVertCamaraBajada = false;
                        objCamara.transform.position = new Vector3(objCamara.transform.position.x, yInicialCamara, objCamara.transform.position.z);
                    }

                    if (despVertCamaraBajada == true)
                    {
                        objCamara.transform.Translate(0, -velDesplCamara * Time.deltaTime, 0);
                    }                   
                }
                else
                {
                    //Sigue a MeCheese
                    objCamara.transform.position = new Vector3(objCamara.transform.position.x, this.transform.position.y, objCamara.transform.position.z);
                }
            }                   
        }      
    }

	public IEnumerator EnumGolpeado(){
        float distanciaGolpeado = 2f;
        float posicionCaida = objCamara.transform.position.x - separacionx - distanciaGolpeado;

        Sonido(1); //Daño
        this.transform.position = new Vector2(posicionCaida, this.transform.position.y);
        meMuevo = false;
        invulnerable = true;
        if (Vidas == 0)
        {
            yield return new WaitForSeconds(1f);
            CambiaAnimacion(5); //Muerto            
        } else
        {
            StartCoroutine("EnumInvulnerable");
            yield return new WaitForSeconds(1.5f);
            CambiaAnimacion(0); //Corriendo
            this.transform.position = new Vector2(objCamara.transform.position.x - separacionx, this.transform.position.y);

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
        float margenDesplazamiento = 1.2f;
        if (saltoTrampolin)
        {
            margenDesplazamiento = 4f;
        }
        if (this.transform.position.x < objCamara.transform.position.x - separacionx - margenDesplazamiento)
        {
            if (this.invulnerable == false && berserk == false && meta == false)
            {
                golpeado = true;
                Vidas--;
                CambiaAnimacion(4); //Dañado
                StartCoroutine("EnumGolpeado");
            }
        } else
        {
            StartCoroutine("VolverASituar");
        }
    }

    public IEnumerator VolverASituar()
    {
        yield return new WaitForSeconds(0.5f);
        if (golpeado == false)
        {            
            this.transform.position = new Vector2(objCamara.transform.position.x - separacionx, this.transform.position.y);
        }
        
    }

    public IEnumerator FinIntro()
    {
        if (SceneManager.GetActiveScene().name != "Esc_Mundo1_1")
        {
            float segundos = 1f;
            yield return new WaitForSeconds(segundos);
            intro = true;
            Sonido(0);
        }
    }

    public void Sonido(int numeroSonido)
    {
        this.GetComponents<AudioSource>()[numeroSonido].Play();
    }

    public void PararSonido(int numeroSonido)
    {
        this.GetComponents<AudioSource>()[numeroSonido].Stop();
    }

    public void SonidoMonedas(){
        GameObject objSonidoMoneda = Instantiate(objSonidosMonedas);
        objSonidoMoneda.GetComponents<AudioSource>()[monedas%6].Play();
    }

    public void LlegoMeta()
    {
        meta = true;
        PararSonido(0);
    }

    public void CambiaAnimacion(int transicion)
    {
        if (SceneManager.GetActiveScene().buildIndex <= 3)
        {
            //Debug.Log(SceneManager.GetActiveScene().buildIndex);
            this.animMe.SetInteger("TransMe", transicion);
        } else
        {
            this.animMe.SetInteger("TransMe", 20);
        }
    }
}
