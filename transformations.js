function doFirst(){
	var x = document.getElementById('canvas');
	canvas = x.getContext('2d');

	canvas.font="bold 22px Tahoma";
	canvas.textAlign="start";
	canvas.fillText("start",10,30);

	canvas.translate(100,150);
	canvas.fillText("after",0,0);

	canvas.rotate(1);
	canvas.fillText("after text",0,0);

	canvas.scale(1.5,4);
	canvas.fillText("scale",0,20);

}
window.addEventListener("load", doFirst, false);