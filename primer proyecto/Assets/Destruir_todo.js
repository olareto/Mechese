#pragma strict




function OnTriggerEnter(per:Collider)
{
if(per.gameObject.name=="Suelo")
{
}
else{
UnityEngine.Object.Destroy(per.gameObject);

}
}