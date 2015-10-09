document.body.onload = addElements();


function addElements(){
	var boxes = document.getElementsByClassName("box");
	for(var i=0; i<boxes.length; i++) {
		
		
		var rightWall = document.createElement("figure");
			rightWall.className = "right";
			boxes[i].appendChild(rightWall);
		var topWall = document.createElement("figure");
			topWall.className = "top";
			boxes[i].appendChild(topWall);
		var leftWall = document.createElement("figure");
			leftWall.className = "left";
			boxes[i].appendChild(leftWall);
		var bottomWall = document.createElement("figure");
			bottomWall.className = "bottom";
			boxes[i].appendChild(bottomWall);
		var frontWall = document.createElement("figure");
			frontWall.className = "front";
			boxes[i].appendChild(frontWall);
		}

}