using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;

public class Scr_Personaje2 : MonoBehaviour
{
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
    //private Animator animMe;

    //private float yInicialCamara;
    private float separacionx;
    private float yInicial;

    //private int salto;
    private int vidas;
    private int monedas;

    private bool golpeado;
    private bool meMuevo;
    private bool invulnerable;
    private bool berserk;
    private bool intro;
    private bool meta;
    private bool heTocado;

    private bool trampolin;
    private bool subidaTrampolin;
    private bool desplazamiento;
    private bool subida;

    public int cambioHecho;

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
    void Start()
    {
        objCamara = GameObject.FindGameObjectWithTag("MainCamera");

        rbMe = this.GetComponent<Rigidbody2D>();
        //animMe = this.GetComponent<Animator>();

        //salto = 0;

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
        
        intro = false;
        StartCoroutine("FinIntro");

        //yInicialCamara = objCamara.transform.position.y;
        separacionx = objCamara.transform.position.x - this.transform.position.x;
        yInicial = this.transform.position.y;

        //CambiaAnimacion(0); //Animacion Inicial Corriendo

        trampolin = false;
        subidaTrampolin = false;
        desplazamiento = false;
        subida = false;

        cambioHecho = 0;
}

    // Update is called once per frame
    void Update()
    {
        if (intro == true)
        {
            MovimientoCamaraYMe();

            //Para ordenador
            if (Input.GetKeyDown("space") && !golpeado && !meta && !trampolin)
            {
                cambioHecho++;
                if (cambioHecho <= 2)
                {
                    if (subida)
                    {
                        subida = false;
                    }
                    else
                    {
                        subida = true;
                    }
                }
                desplazamiento = true;
                
            }

            //Para movil
            if (Input.touchCount > 0 && !heTocado && !golpeado && !meta && !trampolin)
            {
                heTocado = true;
                cambioHecho++;
                if (subida)
                {
                    subida = false;
                }
                else
                {
                    subida = true;
                }
                desplazamiento = true;
            }

            if (Input.touchCount == 0)
            {
                heTocado = false;
            }

            if (desplazamiento)
            {
                DesplazamientoTriciclo();
            }

            if (trampolin){
                MovimientoTrampolin();
            }
        }
    }

    

    public void DesplazamientoTriciclo()
    {
        float velDespl = 12f;
        float yDesplazada = 7.5f;


        if (subida)
        {
            if (transform.position.y < yDesplazada)
            {
                //this.transform.Translate(velDespl * Time.deltaTime/3, velDespl * Time.deltaTime, 0); //Desplazamiento un poco diagonal
                this.transform.Translate(0, velDespl * Time.deltaTime, 0);
                this.GetComponent<SpriteRenderer>().sortingOrder = -1;
            }
            else
            {
                this.transform.position = new Vector3(transform.position.x, yDesplazada, transform.position.z);
                desplazamiento = false;
                subida = true;
                cambioHecho = 0;
            }
        }
        else
        {
            if (transform.position.y > yInicial)
            {
                //this.transform.Translate(-velDespl * Time.deltaTime/3, -velDespl * Time.deltaTime, 0); //Desplazamiento un poco diagonal
                this.transform.Translate(0, -velDespl * Time.deltaTime, 0);
            }
            else
            {
                this.transform.position = new Vector3(transform.position.x, yInicial, transform.position.z);
                desplazamiento = false;
                subida = false;
                cambioHecho = 0;
                this.GetComponent<SpriteRenderer>().sortingOrder = 0;
            }
        }
        
        
    }

    public void MovimientoTrampolin()
    {
        rbMe.freezeRotation = false;
        this.GetComponent<Collider2D>().isTrigger = false;
        
        //Si ha hecho el salto completo
        if (this.transform.position.y <= yInicial-0.2)
        { 
            rbMe.freezeRotation = true;
            this.transform.rotation = new Quaternion(0f, 0f, 0f, 0f);
            rbMe.gravityScale = 0;
            rbMe.velocity = new Vector2(0, 0);
            this.GetComponent<Collider2D>().isTrigger = true;
            this.transform.position = new Vector3(this.transform.position.x, yInicial, this.transform.position.z);          
            trampolin = false;
        }
    }

    public void OnTriggerEnter2D(Collider2D colTr)
    {

        if (meta == false)
        {
            string nombreColTr = colTr.gameObject.name;

            if (nombreColTr == "Moneda")
            {
                Destroy(colTr.gameObject);
                monedas++;
                //SonidoMonedas();
            }

            if (nombreColTr == "Botiquin")
            {
                //Sonido(3); //Sardina
                Destroy(colTr.gameObject);
                vidas++;
            }

            if (nombreColTr == "PowerUP")
            {
                //Sonido(2); //Berserk
                Destroy(colTr.gameObject);
                //CambiaAnimacion(6); //Berserk
                //berserk = true;
                //this.velocidad *= 2;
            }

            if (nombreColTr == "Vacio")
            {
                //Sonido(4); //CaidaAlVacio
                golpeado = true;
                vidas = 0;
                //PararSonido(0);
                meMuevo = false;
            }

            if (nombreColTr == "Trampolin")
            {
                trampolin = true;
                subidaTrampolin = true;
            }

            if (nombreColTr == "FinTrampolin" && trampolin)
            {
                subidaTrampolin = false;
                rbMe.AddForce(new Vector2(0f,500f));
            }

            //Ya no puedo saltar encima
            if (nombreColTr == "BaseCamion")
            {
                colTr.GetComponentsInParent<Collider2D>()[1].enabled = false;
                colTr.GetComponentsInParent<Collider2D>()[2].enabled = false;
            }

            if (berserk == false)
            {
                ////Ya no puedo saltar encima
                //if (nombreColTr == "TuberiaJefeBase")
                //{
                //    colTr.GetComponentsInParent<Collider2D>()[1].enabled = false;
                //}

                //if (nombreColTr == "TuberiaJefe")
                //{
                //    colTr.gameObject.GetComponent<Scr_Tuberia>().LanzarAgua();
                //    salto = 0;
                //}

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
                        nombreColTr == "Jefe_1"||

                        nombreColTr == "Coche"||
                        nombreColTr == "Camion"||
                        nombreColTr == "Ratamotera"||
                        nombreColTr == "Fuego"
                    )
                )
                {
                    if (this.invulnerable == false)
                    {
                        golpeado = true;
                        Vidas--;
                        if (vidas == 0)
                        {
                            //PararSonido(0);
                        }
                        //CambiaAnimacion(4); //Dañado
                        StartCoroutine("EnumGolpeado");
                    }

                    ////Ya no puedo saltar encima
                    //if (nombreColTr == "BaseCaja")
                    //{
                    //    colTr.GetComponentsInParent<Collider2D>()[1].enabled = false;
                    //}
                }
            }
            else
            {
                ////Modo BERSERK
                //if (golpeado == false &&
                //    (
                //        nombreColTr == "Carta" ||
                //        nombreColTr == "RataPija" ||
                //        nombreColTr == "Pajaro" ||
                //        nombreColTr == "Perro" ||
                //        nombreColTr == "GatoMalo" ||
                //        nombreColTr == "Cartero"
                //    )
                //)
                //{
                //    Destroy(colTr.gameObject);
                //    GameObject objPolvo = Instantiate(pfPolvo);
                //    objPolvo.transform.position = new Vector3(colTr.transform.position.x, colTr.transform.position.y, colTr.transform.position.z);
                //}
            }
        }
    }

    public void MovimientoCamaraYMe()
    {
        //Movimiento horizontal
        if (meMuevo == true)
        {
            //MeCheese
            if (!trampolin)
            {
                this.transform.Translate(velocidad * Time.deltaTime, 0, 0);
            } else
            {
                
                if (subidaTrampolin)
                {
                    this.transform.Translate(velocidad * Time.deltaTime * 1.2f, 0, 0);
                }
                else
                {
                    //Corregimos el desplazamiento de la camara por usar el trampolin
                    this.transform.position = new Vector2(objCamara.transform.position.x - separacionx, this.transform.position.y);
                    rbMe.gravityScale = 1.2f;

                    //this.transform.Translate(velocidad * Time.deltaTime * 1.2f, 0, 0);
                    this.transform.position = new Vector3(transform.position.x + velocidad * Time.deltaTime, transform.position.y, transform.position.z);
                }

            }

            if (this.transform.position.x >= posicionMeta && posicionMeta != -1)
            {
                LlegoMeta();
            }

            //Camara
            if (meta == false && vidas >= 1)
            {
                if (!trampolin)
                {
                    objCamara.transform.Translate(velocidad * Time.deltaTime, 0, 0);
                } else
                {
                    objCamara.transform.Translate(velocidad * Time.deltaTime, 0, 0);
                                
                }                        
            }

        }

        
    }

    public IEnumerator EnumGolpeado()
    {
        float distanciaGolpeado = 2f;
        float posicionCaida = objCamara.transform.position.x - separacionx - distanciaGolpeado;

        //Sonido(1); //Daño
        this.transform.position = new Vector2(posicionCaida, this.transform.position.y);
        meMuevo = false;
        invulnerable = true;
        if (Vidas == 0)
        {
            yield return new WaitForSeconds(1f);
            //CambiaAnimacion(5); //Muerto            
        }
        else
        {
            StartCoroutine("EnumInvulnerable");
            yield return new WaitForSeconds(1.5f);
            //CambiaAnimacion(0); //Corriendo
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

    public IEnumerator FinIntro()
    {
        if (SceneManager.GetActiveScene().name != "Esc_Mundo1_1")
        {
            float segundos = 1f;
            yield return new WaitForSeconds(segundos);
            intro = true;
            //Sonido(0);
        }
    }

    public void LlegoMeta()
    {
        meta = true;
        //PararSonido(0);
    }

}
