function doFirst(){
	var x = document.getElementById('canvas');
	canvas = x.getContext('2d');
	
	canvas.beginPath();
	canvas.moveTo(50,50);
	canvas.lineTo(70,250);
	canvas.lineTo(300,200);
	canvas.lineTo(300,100);
	canvas.closePath();
	canvas.stroke();
}
window.addEventListener("load", doFirst, false);