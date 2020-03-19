function greet(){
	window.alert("Bonjour tout le monde !");
}

function addItem(){
	let new_item = document.getElementById("item").value;
	let new_li = document.createElement("li");
	let new_text = document.createTextNode("text");
	new_text.text = new_item;
	if(document.getElementById("important").checked == true ){
		new_li.color = "red";
	}
	
	if(document.getElementById("groceries").checked == true ){
		new_li.style["underline"];
	}
	
	new_li.appendChild(new_text);
	new_li.text = new_item;
	document.getElementById("list").appendChild(new_li);
}

function init(){
	document.getElementById("first").src = "flower1.png";
	let images = document.getElementById("container").getElementsByTagName("img");
	images[0].src = "flower1.png";
	images[1].src = "flower2.png";
	images[2].src = "flower1.png";
	images[3].src = "flower2.png";
	images[4].src = "flower1.png";
	document.getElementById("text").innerHTML = "<div><p>Your are great!</p></div>";

	let image = document.createElement("img");
	image.src = "flower2.png";
	document.getElementById("new_element").appendChild(image);
	
	let spans = document.getElementById("rainbow").getElementsByTagName("span");
	let colors = ["red", "orange", "yellow", "green", "purple", "pink"];

	for (var i = spans.length - 1; i >= 0; i--) {
		spans[i].style.color = colors[i];
	}
	
	var changeSrc = function(event) {
	  if (event.target.src) {
		  let filename = event.target.src.replace(/^.*[\\\/]/, '');
			  if(filename =="flower1.png"){
				  event.target.src = "flower2.png";
			  }
			  else{
					 event.target.src = "flower1.png";
			  }
	  }
	};

	document.getElementById("event").addEventListener("mouseover", changeSrc);
	
}