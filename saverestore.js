function doFirst(){
	var x = document.getElementById('canvas');
	canvas = x.getContext('2d');

	canvas.font="bold 22px Tahoma";
	canvas.textAlign="start";
	
	canvas.save();
	canvas.fillText("lets begin",10,20);

	canvas.rotate(1);
	canvas.fillText("after rotatation",60,10);

	canvas.restore();
	canvas.fillText("after restoring",10,20);
}
window.addEventListener("load", doFirst, false);