#pragma strict
var polvo:GameObject;
private var inicialx:double;
private var inicialy:double;
private var polvo1 : GameObject;
private var polvo12 : GameObject;
private var polvo13 : GameObject;
private var polvo14 : GameObject;

private var polvo2 : GameObject;
private var polvo22 : GameObject;
private var polvo23 : GameObject;
private var polvo24 : GameObject;

private var polvo3 : GameObject;
private var polvo32 : GameObject;
private var polvo33 : GameObject;
private var polvo34 : GameObject;

private var polvo4 : GameObject;
private var polvo42 : GameObject;
private var polvo43 : GameObject;
private var polvo44 : GameObject;

function Start () {

inicialx=this.transform.position.x;
inicialy=this.transform.position.y;

polvo1 = Instantiate(polvo, this.transform.position, this.transform.rotation);
polvo12 = Instantiate(polvo, this.transform.position, this.transform.rotation);
polvo13 = Instantiate(polvo, this.transform.position, this.transform.rotation);
polvo14 = Instantiate(polvo, this.transform.position, this.transform.rotation);

polvo2 = Instantiate(polvo, this.transform.position, this.transform.rotation);
polvo22 = Instantiate(polvo, this.transform.position, this.transform.rotation);
polvo23 = Instantiate(polvo, this.transform.position, this.transform.rotation);
polvo24 = Instantiate(polvo, this.transform.position, this.transform.rotation);

polvo3 = Instantiate(polvo, this.transform.position, this.transform.rotation);
polvo32 = Instantiate(polvo, this.transform.position, this.transform.rotation);
polvo33 = Instantiate(polvo, this.transform.position, this.transform.rotation);
polvo34 = Instantiate(polvo, this.transform.position, this.transform.rotation);

polvo4 = Instantiate(polvo, this.transform.position, this.transform.rotation);
polvo42 = Instantiate(polvo, this.transform.position, this.transform.rotation);
polvo43 = Instantiate(polvo, this.transform.position, this.transform.rotation);
polvo44 = Instantiate(polvo, this.transform.position, this.transform.rotation);

caloret();
/**
inicial
pos
x=-23.85913
y=-7.124741
scala
0.196192
0.196192
0.1655344
0.1431473
0.1189237
///////77rama derecha arriba
1
-23.08472   0.77441
-6.946026   0.178721
2
-21.27942   2.57971
-6.058556   1.066185
3
-19.83972   4.01941
-5.274719   1.850022
4
-18.37317   5.48596
-4.590271   2.53447
**/
//rama derecha arriba

}
function caloret(){

//1
yield WaitForSeconds(0.1);
polvo1.transform.position.x=inicialx+0.77441;
polvo1.transform.position.y=inicialy+0.178721;

polvo2.transform.position.x=inicialx+0.77441;
polvo2.transform.position.y=inicialy-0.178721;

polvo3.transform.position.x=inicialx-0.77441;
polvo3.transform.position.y=inicialy+0.178721;

polvo4.transform.position.x=inicialx-0.77441;
polvo4.transform.position.y=inicialy-0.178721;

polvo1.transform.localScale.x=0.196192;
polvo1.transform.localScale.y=0.196192;
polvo2.transform.localScale.x=0.196192;
polvo2.transform.localScale.y=0.196192;
polvo3.transform.localScale.x=0.196192;
polvo3.transform.localScale.y=0.196192;
polvo4.transform.localScale.x=0.196192;
polvo4.transform.localScale.y=0.196192;

yield WaitForSeconds(0.01);


polvo12.transform.position.x=inicialx+2.57971;
polvo12.transform.position.y=inicialy+1.066185;

polvo22.transform.position.x=inicialx+2.57971;
polvo22.transform.position.y=inicialy-1.066185;

polvo32.transform.position.x=inicialx-2.57971;
polvo32.transform.position.y=inicialy+1.066185;

polvo42.transform.position.x=inicialx-2.57971;
polvo42.transform.position.y=inicialy-1.066185;

polvo12.transform.localScale.x=0.1655344;
polvo12.transform.localScale.y=0.1655344;
polvo22.transform.localScale.x=0.1655344;
polvo22.transform.localScale.y=0.1655344;
polvo32.transform.localScale.x=0.1655344;
polvo32.transform.localScale.y=0.1655344;
polvo42.transform.localScale.x=0.1655344;
polvo42.transform.localScale.y=0.1655344;

yield WaitForSeconds(0.01);



polvo13.transform.position.x=inicialx+4.01941;
polvo13.transform.position.y=inicialy+1.850022;

polvo23.transform.position.x=inicialx+4.01941;
polvo23.transform.position.y=inicialy-1.850022;

polvo33.transform.position.x=inicialx-4.01941;
polvo33.transform.position.y=inicialy+1.850022;

polvo43.transform.position.x=inicialx-4.01941;
polvo43.transform.position.y=inicialy-1.850022;

polvo13.transform.localScale.x=0.1431473;
polvo13.transform.localScale.y=0.1431473;
polvo23.transform.localScale.x=0.1431473;
polvo23.transform.localScale.y=0.1431473;
polvo33.transform.localScale.x=0.1431473;
polvo33.transform.localScale.y=0.1431473;
polvo43.transform.localScale.x=0.1431473;
polvo43.transform.localScale.y=0.1431473;

yield WaitForSeconds(0.01);


polvo14.transform.position.x=inicialx+5.48596;
polvo14.transform.position.y=inicialy+2.53447;

polvo24.transform.position.x=inicialx+5.48596;
polvo24.transform.position.y=inicialy-2.53447;

polvo34.transform.position.x=inicialx-5.48596;
polvo34.transform.position.y=inicialy+2.53447;

polvo44.transform.position.x=inicialx-5.48596;
polvo44.transform.position.y=inicialy-2.53447;

polvo14.transform.localScale.x=0.1189237;
polvo14.transform.localScale.y=0.1189237;
polvo24.transform.localScale.x=0.1189237;
polvo24.transform.localScale.y=0.1189237;
polvo34.transform.localScale.x=0.1189237;
polvo34.transform.localScale.y=0.1189237;
polvo44.transform.localScale.x=0.1189237;
polvo44.transform.localScale.y=0.1189237;


}
function Update () {

}