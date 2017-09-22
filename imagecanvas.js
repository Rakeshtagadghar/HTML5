function doFirst(){
	var x = document.getElementById('canvas');
	canvas = x.getContext('2d');
	var pic = new Image();
	pic.src="D:\Users\RAKESH\Desktop\HTML5\2.png";
	pic.addEventListener("load",function(){canvas.drawimage(pic,0,0,canvas.width,canvas.height)},false);

}
window.addEventListener("load", doFirst, false);