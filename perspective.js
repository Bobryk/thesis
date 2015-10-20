document.body.onload = addElements();


function addElements(){
	var boxes = document.getElementsByClassName("perspective-box");
	for(var i=0; i<boxes.length; i++) {
		var inner = document.createElement("div");
			inner.className = "perspective-box-inner";
			
		var rightWall = document.createElement("figure");
			rightWall.className = "right";
			inner.appendChild(rightWall);
		var topWall = document.createElement("figure");
			topWall.className = "top";
			inner.appendChild(topWall);
		var leftWall = document.createElement("figure");
			leftWall.className = "left";
			inner.appendChild(leftWall);
		var bottomWall = document.createElement("figure");
			bottomWall.className = "bottom";
			inner.appendChild(bottomWall);
		

		boxes[i].insertBefore(inner, boxes[i].firstChild);
	}
	var boxes = document.getElementsByClassName("perspective-mirror");
	for(var j = 0;j<boxes.length;j++){
		var inner = document.createElement("div");
		inner.className = "perspective-mirror-inner";
		var next = document.createElement("figure");
		next.className = "mirror";
		inner.appendChild(next);
		for(var i=0; i<10; i++) {	
			var temp = document.createElement("figure");
			temp.className = "mirror";
			next.appendChild(temp);
			next = next.firstChild;
		}
		boxes[j].insertBefore(inner, boxes[j].firstChild);
	}

}