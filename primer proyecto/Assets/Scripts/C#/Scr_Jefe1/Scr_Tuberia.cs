using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Scr_Tuberia : MonoBehaviour
{

    [SerializeField]
    private GameObject agua;

    private int contador;

    // Use this for initialization
    void Start()
    {
        this.name = "TuberiaJefe";

        contador = 0;
    }

    // Update is called once per frame
    void Update()
    {

    }

    public void LanzarAgua()
    {
        StartCoroutine("EnumLanzaAgua");
    }

    public IEnumerator EnumLanzaAgua()
    {
        while (contador < 30)
        {
            yield return new WaitForSeconds(0.05f);
            GameObject aguaInst = Instantiate(agua);
            aguaInst.transform.position = new Vector3(this.transform.position.x - 2f, -2.53967f, 0f);
            contador++;
        }
    }
}