document.body.onload = addElements();


function addElements(){
	var boxes = document.getElementsByClassName("box");
	for(var i=0; i<boxes.length; i++) {
		var inner = document.createElement("div");
			inner.className = "perspective-box-inner";
			boxes[i].appendChild(inner);
		
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
		var frontWall = document.createElement("figure");
			frontWall.className = "front";
			inner.appendChild(frontWall);


		}
		

}