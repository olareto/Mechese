using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;

public class Scr_ControladorMenu : MonoBehaviour {

    [SerializeField]
    private GameObject objMenu1;

    [SerializeField]
    private GameObject objMenu2;

    // Use this for initialization
    void Start () {
		
	}
	
	// Update is called once per frame
	void Update () {
		
	}

    public void BtnStart()
    {
        objMenu1.SetActive(false);
        objMenu2.SetActive(true);
    }

    public void BtnMundo1()
    {
        SceneManager.LoadScene("Esc_Level1_1");
    }
}
