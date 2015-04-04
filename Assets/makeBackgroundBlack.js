#pragma strict

function Start () {
	this.GetComponent.<Renderer>().material.color = Color.black;
	RenderSettings.ambientLight = Color.white;
	
	var slice : float = 2.0F * Mathf.PI / 32.0F;
	var cylinders : GameObject[] = GameObject.FindGameObjectsWithTag("cil");
	for(var i=0; i<cylinders.length; ++i)
	{
		var angle :float = slice * i;
		var x : float = 15.0 * Mathf.Cos(angle);
		var y : float = 15.0 * Mathf.Sin(angle);
		cylinders[i].transform.localPosition.x = x;
		cylinders[i].transform.localPosition.z = y;
	}
	var spheres : GameObject[] = GameObject.FindGameObjectsWithTag("sphere");
	slice = 2.0F * Mathf.PI / 24.0F;
	for(i=0; i<spheres.length; ++i)
	{
		angle = slice * i;
		x = 10.0 * Mathf.Cos(angle);
		y = 10.0 * Mathf.Sin(angle);
		spheres[i].transform.localPosition.x = x;
		spheres[i].transform.localPosition.z = y;
	}
	
		var spheres2 : GameObject[] = GameObject.FindGameObjectsWithTag("sphere2");
	slice = 2.0F * Mathf.PI / 18.0F;
	for(i=0; i<spheres2.length; ++i)
	{
		angle = slice * i;
		x = 7.0 * Mathf.Cos(angle);
		y = 7.0 * Mathf.Sin(angle);
		spheres2[i].transform.localPosition.x = x;
		spheres2[i].transform.localPosition.z = y;
	}
	
		var spheres3 : GameObject[] = GameObject.FindGameObjectsWithTag("sphere3");
	slice = 2.0F * Mathf.PI / 12.0F;
	for(i=0; i<spheres3.length; ++i)
	{
		angle = slice * i;
		x = 4.5 * Mathf.Cos(angle);
		y = 4.5 * Mathf.Sin(angle);
		spheres3[i].transform.localPosition.x = x;
		spheres3[i].transform.localPosition.z = y;
	}
	
		var spheres4 : GameObject[] = GameObject.FindGameObjectsWithTag("sphere4");
	slice = 2.0F * Mathf.PI / 8.0F;
	for(i=0; i<spheres4.length; ++i)
	{
		angle = slice * i;
		x = 2.0 * Mathf.Cos(angle);
		y = 2.0 * Mathf.Sin(angle);
		spheres4[i].transform.localPosition.x = x;
		spheres4[i].transform.localPosition.z = y;
	}
}

function Update () {

}