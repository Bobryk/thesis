var level = [[1,1,1,1,1,1,1,1,1,1],[1,0,0,0,0,0,0,0,0,1],[1,2,1,1,1,1,1,1,1,1],[1,0,0,0,0,0,1,0,0,1],[1,0,1,1,1,0,1,1,0,1],[1,0,1,0,0,0,0,0,0,1],[1,0,1,0,1,1,1,1,0,1],[1,0,1,0,0,1,0,1,1,1],[1,0,0,0,0,0,0,0,0,1],[1,1,1,1,1,1,1,1,1,1]];
for(var i=0;i<level.length;i++){
	for(var j=0;j<level[i].length;j++){
		if(level[i][j]==1){
			var element = document.createElement("div");
			element.className = "depthly perspective perspective-box";
			element.id = j + "-" + i;
			element.style.left = j*80;
			element.style.top = i*80;
			
			document.body.appendChild(element);
		}
		else if(level[i][j]==2){
			var element = document.createElement("section");
			element.id = "player";
			element.className="depthly depth-9";
			element.style.left = j*80;
			element.style.top = i*80;
			element.style.zIndex="-99";
			document.body.appendChild(element);
		}
	}
}

var player = {direction:0,x:80,y:160};

var timer = setInterval(move,100);
function move(){

	if(player.direction==0){
		var nextLoc = parseInt(player.y) -  10;
		var nextLocX = Math.floor(parseInt(player.x)/80);
		var nextLocY = Math.floor(nextLoc/80);
		if(document.getElementById(nextLocX+"-"+nextLocY)==null){
			document.getElementById("player").style.top = nextLoc+"px";
			player.y-=10;
		}
		else{
			player.direction = Math.floor(Math.random()*4);
		}
	}
	else if(player.direction==2){
		var nextLoc = parseInt(player.y) +  10;
		var nextLocX = Math.floor(parseInt(player.x)/80);
		var nextLocY = Math.floor((nextLoc+70)/80);
		if(document.getElementById(nextLocX+"-"+nextLocY)==null){
			document.getElementById("player").style.top = nextLoc+"px";
			player.y+=10;
		}
		else{
			player.direction = Math.floor(Math.random()*4);
		}
	}
	else if(player.direction==3){
		var nextLoc = parseInt(player.x) -  10;
		var nextLocY = Math.floor(parseInt(player.y)/80);
		var nextLocX = Math.floor((nextLoc)/80);
		if(document.getElementById(nextLocX+"-"+nextLocY)==null){
			document.getElementById("player").style.left = nextLoc+"px";
			player.x-=10;
		}
		else{
			player.direction = Math.floor(Math.random()*4);
		}
	}
	else{
		var nextLoc = parseInt(player.x) +  10;
		var nextLocY = Math.floor(parseInt(player.y)/80);
		var nextLocX = Math.floor((nextLoc+70)/80);
		if(document.getElementById(nextLocX+"-"+nextLocY)==null){
			document.getElementById("player").style.left = nextLoc+"px";
			player.x+=10;
		}
		else{
			player.direction = Math.floor(Math.random()*4);
		}
	}
}