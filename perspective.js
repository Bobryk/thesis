document.body.onload = addElements();


function addElements(){
	var boxes = document.getElementsByClassName("box");
	for(var i=0; i<boxes.length; i++) {

		var box = document.createElement("div");
		box.className = "3d";
		

		var rightWall = document.createElement("figure");
			rightWall.className = "right";
			box.appendChild(rightWall);
		var topWall = document.createElement("figure");
			topWall.className = "top";
			box.appendChild(topWall);
		var leftWall = document.createElement("figure");
			leftWall.className = "left";
			box.appendChild(leftWall);
		var bottomWall = document.createElement("figure");
			bottomWall.className = "bottom";
			box.appendChild(bottomWall);
		boxes[i].appendChild(box);
	}

}