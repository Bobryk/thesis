document.body.onload = addElements();


function addElements(){
	var boxes = document.getElementsByClassName("perspective-box");
	for(var i=0; i<boxes.length; i++) {
		var inner = document.createElement("div");
			inner.className = "perspective-box-inner";
			if(typeof InstallTrigger !== 'undefined'){
				inner.style.perspectiveOrigin = "2000px -2000px";
				inner.style.perspective = "10000px";
			}
			if(window.getComputedStyle(boxes[i], null).getPropertyValue('padding-left')!="0px"||window.getComputedStyle(boxes[i], null).getPropertyValue('padding-top')!="0px"){
				var paddingLeft = window.getComputedStyle(boxes[i], null).getPropertyValue('padding-left');
				paddingLeft = "-" + paddingLeft;
				inner.style.marginLeft = paddingLeft;
				var paddingTop = window.getComputedStyle(boxes[i], null).getPropertyValue('padding-top');
				paddingTop = "-" + paddingTop;
				inner.style.marginTop = paddingTop;
			}
			inner.style.border = "initial";
		var rightWall = document.createElement("figure");
			rightWall.className = "right";
			rightWall.style.border = window.getComputedStyle(boxes[i], null).getPropertyValue('border');
			inner.appendChild(rightWall);
		var topWall = document.createElement("figure");
			topWall.className = "top";
			topWall.style.border = window.getComputedStyle(boxes[i], null).getPropertyValue('border');
			inner.appendChild(topWall);
		var leftWall = document.createElement("figure");
			leftWall.className = "left";
			leftWall.style.border = window.getComputedStyle(boxes[i], null).getPropertyValue('border');
			inner.appendChild(leftWall);
		var bottomWall = document.createElement("figure");
			bottomWall.className = "bottom";
			bottomWall.style.border = window.getComputedStyle(boxes[i], null).getPropertyValue('border');
			inner.appendChild(bottomWall);
		

		boxes[i].insertBefore(inner, boxes[i].firstChild);
	}
	var boxes = document.getElementsByClassName("perspective-fade");
	for(var j = 0;j<boxes.length;j++){
		var inner = document.createElement("div");
		inner.className = "perspective-fade-inner";
		if(typeof InstallTrigger !== 'undefined'){
			inner.style.perspectiveOrigin = "2000px -2000px";
			inner.style.perspective = "10000px";
		}
		var next = document.createElement("figure");
		next.className = "fade";
		inner.appendChild(next);
		for(var i=0; i<40; i++) {	
			var temp = document.createElement("figure");
			temp.className = "fade";
			next.appendChild(temp);
			next = next.firstChild;
		}
		boxes[j].insertBefore(inner, boxes[j].firstChild);
	}

}