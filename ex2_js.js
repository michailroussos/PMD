window.onload = function(){
	document.getElementById("Register").addEventListener("click", search);

	suggestions("suggestions","Batman Returns");
	suggestions("suggestions","Sherlock Holmes: A Game of Shadows");
	suggestions("suggestions","John Wick");
	suggestions("suggestions","The Matrix");
	
	var slideIndex = 1;
	showSlides(slideIndex);

	document.getElementById("Search_button").addEventListener("click", show_search_bar);
	window.addEventListener("resize", search_bar_toggle);
	/*window.addEventListener("resize", adjust_suggestions);*/
};

var link='http://www.omdbapi.com/?apikey=ebcdb9f6';


function plusSlides(n) {
	showSlides(slideIndex += n);
}
  
function currentSlide(n) {
	showSlides(slideIndex = n);
	console.log(slideIndex);
}

function showSlides(n) {
	var i;
	var slides = document.getElementsByClassName("myPosters");
	var dots = document.getElementsByClassName("dot");
	if (n > slides.length) {slideIndex = 1}    
	if (n < 1) {slideIndex = slides.length}
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";  
	}
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active", "");
	}
	slides[slideIndex-1].style.display = "block";  
	dots[slideIndex-1].className += " active";
  }

function adjust_suggestions(){
	document.getElementById("suggestions").innerHTML='';
	if(window.innerWidth > 992 ){
		suggestions("suggestions","Batman Returns");
		suggestions("suggestions","Sherlock Holmes: A Game of Shadows");
		suggestions("suggestions","John Wick");
		suggestions("suggestions","The Matrix");
	}else if(window.innerWidth > 600 ){
		suggestions("suggestions","Batman Returns");
		suggestions("suggestions","Sherlock Holmes: A Game of Shadows");
		suggestions("suggestions","John Wick");
	}else if(window.innerWidth > 300 ){
		suggestions("suggestions","Batman Returns");
		suggestions("suggestions","John Wick");
	}else{
		suggestions("suggestions","Batman Returns");

	}
}
function search_bar_toggle(){
	if(window.innerWidth< 992 ){
		document.getElementById("Search_button").style.visibility = "visible";
		var search_bar = document.querySelector(".search_bar");
		search_bar.style.visibility="hidden";
	}
	else{
		document.getElementById("Search_button").style.visibility = "hidden";
		var search_bar = document.querySelector(".search_bar");
		search_bar.style.visibility="visible";
	}
	
}

function show_search_bar(){
	var search_bar = document.querySelector(".search_bar");
	var button_holder = document.querySelector(".button_holder");
	search_bar.style.visibility="visible";
	button_holder.style.visibility="hidden";



}

function search(){
	var request = new XMLHttpRequest();
	var search=document.getElementById("search");
	var searchlink=link.concat('&s=',search.value);
	request.open('GET', searchlink , true);
	request.onload = function() {
  		// Begin accessing JSON data here
		var data = JSON.parse(this.response);

  		if (request.status >= 200 && request.status < 400) {
			console.log(data)

			data.Search.forEach(obj => {	
				console.log(obj);
				specific_search(obj.Title)
				console.log('-------------------');
			});
    		
  		} else {
    		console.log('error');
  		}
	}

	request.send();
}


function specific_search(title){
	var request = new XMLHttpRequest();
	var movielink=link.concat('&t=',title);
	request.open('GET', movielink , true);

	request.onload = function() {
		var data = JSON.parse(this.response);
		if (request.status >= 200 && request.status < 400) {
			console.log(data)
		} else {
			console.log('error');
		}
	}

	request.send();
}
function suggestions(id,title,position,total_posters){
	
	var request = new XMLHttpRequest();
	var movielink=link.concat('&t=',title);
	request.open('GET', movielink , true);
	
	request.onload = function() {
		var data = JSON.parse(this.response);
		
		if (request.status >= 200 && request.status < 400) {
			var url=document.createElement("A");
			url.href="https://www.w3schools.com/html/html_links.asp";

			var numbertext=document.createElement("DIV");
			numbertext.innerText=position.concat("/",total_posters);
			numbertext.classList.add("numbertext");
			var poster = document.createElement("DIV");
			poster.appendChild(numbertext);
			var img = document.createElement("IMG");
			img.style.width ='75%' ;
			img.style.height ='80%' ;
			img.class="poster";
			
			img.src=data.Poster;
			url.appendChild(img);
			poster.appendChild(url);

			var url1=document.createElement("A");
			var title=document.createElement("DIV");
			title.innerText = data.Title;
			url1.appendChild(title);
			url1.href="https://www.w3schools.com/html/html_links.asp";

			poster.appendChild(url1);
			var info = document.createElement("DIV");
			info.innerText ='('.concat(data.Year,') ',data.Plot,'\n');
			info.style.width ='75%' ;
			poster.appendChild(info);
			poster.classList.add("myPosters");
			poster.classList.add("fade");
			
			document.getElementById(id).appendChild(poster);
		} else {
			console.log('error');
		}
	}

	request.send();
	
	
	
}


function myFunction() {

	var para1 = document.createElement("DIV");
	para1.innerText = "This is a .";
	
	var para = document.createElement("DIV");
	para.innerText = "This is a paragraph.";
	para.appendChild(para1)
	document.getElementById("lol").appendChild(para);
  }









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