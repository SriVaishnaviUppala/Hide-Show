function myfun()
	{
	 var x=document.getElementById("para");
	 if(x.style.display=="block")
	 {
		x.style.display="none";
		document.getElementById("butn").innerHTML="Read Less";
	}
	else
	{
		x.style.display="block";
		document.getElementById("butn").innerHTML="Read More";
	}
	}