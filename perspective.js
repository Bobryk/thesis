


function addElements(){
	var depthlyElements = document.getElementsByClassName("depthly");
	var depth = 0;
	var isPerspective, isBox, hasDepth = false;
	for(var i = 0;i<depthlyElements.length;i++){
		isPerspective, isBox, hasDepth = false;
		for(var j=0;j<depthlyElements[i].classList.length;j++){
			if(depthlyElements[i].classList[j]=='perspective')isPerspective=true;
			if(depthlyElements[i].classList[j]=='orthographic')isPerspective=false;
			if(depthlyElements[i].classList[j]=='perspective-box')isBox=true;
			if(depthlyElements[i].classList[j].indexOf('depth-')!=-1){
				hasDepth=true;
				depth = parseInt(depthlyElements[i].classList[j].substring(5));
				depthlyElements[i].style.transform="translateZ("+depth*10+"px)";
				depthlyElements[i].style.webkitTransform="translateZ("+depth*10+"px)";
				depthlyElements[i].style.zIndex="-20";
			}
		}
		
		if(isBox&&!hasDepth){
			var box = depthlyElements[i];
			var inner = document.createElement("div");
			inner.className = "perspective-box-inner";
			inner.style.zIndex="-21";
			if(typeof InstallTrigger !== 'undefined'||!isPerspective){
				inner.style.perspectiveOrigin = "2000px -2000px";
				inner.style.perspective = "10000px";
			}
			if(window.getComputedStyle(box, null).getPropertyValue('padding-left')!="0px"||window.getComputedStyle(box, null).getPropertyValue('padding-top')!="0px"){
				var paddingLeft = window.getComputedStyle(box, null).getPropertyValue('padding-left');
				paddingLeft = "-" + paddingLeft;
				inner.style.marginLeft = paddingLeft;
				var paddingTop = window.getComputedStyle(box, null).getPropertyValue('padding-top');
				paddingTop = "-" + paddingTop;
				inner.style.marginTop = paddingTop;
			}
			inner.style.border = "initial";
			var rightWall = document.createElement("figure");
				rightWall.className = "right";
				rightWall.style.border = window.getComputedStyle(box, null).getPropertyValue('border');
				inner.appendChild(rightWall);
			var topWall = document.createElement("figure");
				topWall.className = "top";
				topWall.style.border = window.getComputedStyle(box, null).getPropertyValue('border');
				inner.appendChild(topWall);
			var leftWall = document.createElement("figure");
				leftWall.className = "left";
				leftWall.style.border = window.getComputedStyle(box, null).getPropertyValue('border');
				inner.appendChild(leftWall);
			var bottomWall = document.createElement("figure");
				bottomWall.className = "bottom";
				bottomWall.style.border = window.getComputedStyle(box, null).getPropertyValue('border');
				inner.appendChild(bottomWall);
			

			box.insertBefore(inner, box.firstChild);
		}
		
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
window.onload = addElements();