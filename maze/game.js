var level = [[1,1,1,1,1,1,1,1,1,1],[1,0,0,0,0,0,0,0,0,1],[1,0,1,1,1,1,1,1,1,1],[1,0,0,0,0,0,1,0,0,1],[1,0,1,1,1,0,1,1,0,1],[1,0,1,0,0,0,0,0,0,1],[1,0,1,0,1,1,1,1,0,1],[1,0,1,0,0,1,0,1,1,1],[1,0,0,0,0,0,0,0,0,1],[1,1,1,1,1,1,1,1,1,1]];
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
	}
}