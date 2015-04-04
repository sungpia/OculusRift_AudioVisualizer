#pragma strict

static var counter : int;
static var colorChange: boolean;
function Start () {
	counter = 0;
	colorChange = false;
}

function Update () {
	counter = counter + 1;
	var spectrum : float[] = AudioListener.GetSpectrumData(1024, 0, FFTWindow.Hamming);
	var c = new float[32];
	for(var i=0; i<32; ++i)
	{
		var sum : float = 0;
		for(var j=i*16; j<(i+1)*16; ++j)
		{
			sum = sum + spectrum[j];
		}
		c[i] = sum;
	}
	
		Debug.Log("Counter" + counter);
		Debug.Log("Color Change" + colorChange);
	if(counter > 1000)
	{
		counter = 0;
		colorChange = true;
	}
	var cylinders : GameObject[] = GameObject.FindGameObjectsWithTag("cil");
	for(i=0; i<cylinders.length; ++i)
	{
		if (colorChange === true)
		{
			var newcolor : Color;
			var mode : boolean = Random.value > 0.5f;
			var rand:float = Random.value;
			var index:int = Random.Range(0,3);
			newcolor[index] = rand;
			newcolor[ (index + (mode ? 1 : 2 ) ) % 3 ] = 1;
			newcolor[ (index + (mode ? 2 : 1 ) ) % 3 ] = 0;
			cylinders[i].GetComponent.<Renderer>().material.color = newcolor;
		}
		cylinders[i].transform.localScale.y = Mathf.Lerp(cylinders[i].transform.localScale.y, c[i]*40, Time.deltaTime*10.0);
	}	
	var spheres : GameObject[] = GameObject.FindGameObjectsWithTag("sphere");
	for(i=0; i<spheres.length; ++i)
	{
		if (colorChange === true)
		{
			var newcolor1 : Color;
			var mode1 : boolean = Random.value > 0.5f;
			var rand1:float = Random.value;
			var index1:int = Random.Range(0,3);
			newcolor1[index1] = rand1;
			newcolor1[ (index1 + (mode1 ? 1 : 2 ) ) % 3 ] = 1;
			newcolor1[ (index1 + (mode1 ? 2 : 1 ) ) % 3 ] = 0;
			spheres[i].GetComponent.<Renderer>().material.color = newcolor;
		}
		spheres[i].transform.localPosition.y = Mathf.Lerp(spheres[i].transform.localPosition.y, c[i]*60, Time.deltaTime*12.0);
			
	}
	
		var spheres2 : GameObject[] = GameObject.FindGameObjectsWithTag("sphere2");
	for(i=0; i<spheres2.length; ++i)
	{
		if (colorChange === true)
		{
			var newcolor2 : Color;
			var mode2 : boolean = Random.value > 0.5f;
			var rand2:float = Random.value;
			var index2:int = Random.Range(0,3);
			newcolor2[index2] = rand2;
			newcolor2[ (index2 + (mode2 ? 1 : 2 ) ) % 3 ] = 1;
			newcolor2[ (index2 + (mode2 ? 2 : 1 ) ) % 3 ] = 0;
			spheres2[i].GetComponent.<Renderer>().material.color = newcolor1;
		}
		spheres2[i].transform.localPosition.y = Mathf.Lerp(spheres2[i].transform.localPosition.y, c[i]*90, Time.deltaTime*14.0);
			
	}
	
		var spheres3 : GameObject[] = GameObject.FindGameObjectsWithTag("sphere3");
	for(i=0; i<spheres3.length; ++i)
	{
		if (colorChange === true)
		{
			var newcolor3 : Color;
			var mode3 : boolean = Random.value > 0.5f;
			var rand3:float = Random.value;
			var index3:int = Random.Range(0,3);
			newcolor3[index3] = rand3;
			newcolor3[ (index3 + (mode3 ? 1 : 2 ) ) % 3 ] = 1;
			newcolor3[ (index3 + (mode3 ? 2 : 1 ) ) % 3 ] = 0;
			spheres3[i].GetComponent.<Renderer>().material.color = newcolor2;
		}
		spheres3[i].transform.localPosition.y = Mathf.Lerp(spheres3[i].transform.localPosition.y, c[i]*120, Time.deltaTime*16.0);
			
	}
	
		var spheres4 : GameObject[] = GameObject.FindGameObjectsWithTag("sphere4");
	for(i=0; i<spheres4.length; ++i)
	{
		if (colorChange === true)
		{
			var newcolor4 : Color;
			var mode4 : boolean = Random.value > 0.5f;
			var rand4:float = Random.value;
			var index4:int = Random.Range(0,3);
			newcolor4[index4] = rand4;
			newcolor4[ (index4 + (mode4 ? 1 : 2 ) ) % 3 ] = 1;
			newcolor4[ (index4 + (mode4 ? 2 : 1 ) ) % 3 ] = 0;
			spheres4[i].GetComponent.<Renderer>().material.color = newcolor3;
		}
		spheres4[i].transform.localPosition.y = Mathf.Lerp(spheres4[i].transform.localPosition.y, c[i]*150, Time.deltaTime*18.0);
			
	}
	colorChange = false;
}