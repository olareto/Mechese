#pragma strict

var menu_1:GameObject;

var menu_2:GameObject;

var menu_1_prefab:GameObject;
var menu_2_prefab:GameObject;

function Start () {

menu_1=GameObject.Find("Menu_1");
//menu_2=GameObject.Find("Menu_2");
    // UnityEngine.Object.Destroy(menu_1.gameObject);


}

function Update () {

}
function transportar(donde:int)
{

if(donde==1)
{
print("1");
      //UnityEngine.Object.Destroy(this.gameObject);
      
      UnityEngine.Object.Destroy(menu_2.gameObject);
menu_1  = Instantiate(menu_1_prefab, this.transform.position, this.transform.rotation);


//menu_1.transform.position.y=0;
//menu_2.transform.position.y=111;

}
else{
print("2");
     UnityEngine.Object.Destroy(menu_1.gameObject);
menu_2  = Instantiate(menu_2_prefab, this.transform.position, this.transform.rotation);
}



}