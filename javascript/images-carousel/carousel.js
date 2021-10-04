var arr = new Array("images/img1.png", "images/img2.png", "images/img3.png");
var i = 1;
var ref;

function picLibrary(){
	document.images[0].src = arr[i];
	i++;
	if(i > 2){
		i = 0;
	}
}

function start(){
	ref = setInterval("picLibrary()", 1000);
}

function stop(){
	clearInterval(ref);
}
