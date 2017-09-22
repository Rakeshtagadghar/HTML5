function doFirst(){
	var x = document.getElementById('canvas');
	canvas = x.getContext('2d');
	canvas.fillStyle="blue";
	canvas.strokeStyle="red";
	canvas.strokeRect(10,10,100,100);
	canvas.fillRect(10,120,100,100);
	canvas.clearRect(20,130,45,65);
}
window.addEventListener("load", doFirst, false);