window.onload = function(){
	document.getElementById("enlarge").addEventListener("click", enlarge_text);
	document.getElementById("decrease").addEventListener("click", decrease_size_of_text);
};

function enlarge_text(){
	
	
	var txt = document.getElementsByClass("grid-container");
	for (x in txt){
		alert(x
			);
		var size=x.style.fontSize+10;
		x.style.fontSize += size+"EM";
	}
	
	
}

function decrease_size_of_text(){
	var txt = document.getElementsByClassName("grid-container");
	txt.style.fontSize=txt.style.fontSize.smaller();
	document.querySelector("main").style.backgroundColor = "red";
	var x = document.querySelectorAll("main");
}

function button_click(){
	var txt = document.getElementById("txtPimp");

	var size = 12;	
	window.setInterval(function(){
		txt.style.fontSize = size + "pt";
		size += 2;
	}, 2000);
}

function blingMyText(){
	var txt = document.getElementById("txtPimp");
	var cbx = document.getElementById("cbxBling");
	
	if(cbx.checked == true)	{
		txt.style.fontWeight = "bold";
		txt.style.color = "green";
		txt.style.textDecoration = "underline";
	}
	else {
		txt.style.fontWeight = "normal";
		txt.style.color = "black";
		txt.style.textDecoration = "none";
	}
}

function snoopifyMyText(){
	var txt = document.getElementById("txtPimp");
	txt.value = txt.value.toUpperCase();
	var sentences = txt.value.split(".");
	for(var i=0; i<sentences.length; i++){
		if(sentences[i].length == 0)
			continue;
		
		var words = sentences[i].split(" ");
		words[words.length-1] = words[words.length-1] + "-izzle";
		sentences[i] = words.join(" ");
	}
	sentences = sentences.join(".");
	txt.value = sentences;
}