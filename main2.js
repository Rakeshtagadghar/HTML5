function doFirst(){
	barSize=500;
	mysong=document.getElementById('mysong');
	playButton=document.getElementById('playButton');
	bar=document.getElementById('defaultBar');
	progressBar=document.getElementById('progressBar');
	mutebtn=document.getElementById('mutebtn');
	playButton.addEventListener('click',playOrPause,false);
	mutebtn.addEventListener('click',playOrPause,false);
	bar.addEventListener('click',clickedBar,false);
	mutebtn.addEventListener('click',vidmute,false);
}
function playOrPause() {
	if(!mysong.paused && !mysong.ended){
		mysong.pause();
		playButton.innerHTML='Play';
		window.clearInterval(updateBar);
	}
	else{
		mysong.play();
		playButton.innerHTML='Pause';
		updateBar=setInterval(update,500);
	}
}
function update(){
	if (!mysong.ended) {
		var size=parseInt(mysong.currentTime*barSize/mysong.duration);
		progressBar.style.width=size +'px';
	}
	else{
		progressBar.style.width='0px';
		playButton.innerHTML='play';
		window.clearInterval(updateBar);
	}
}
function clickedBar(e){
	if(!mysong.paused && !mysong.ended){
		var mouseX=e.pageX-bar.offsetLeft;
		var newtime=mouseX*mysong.duration/barSize;
		mysong.currentTime=newtime;
		progressBar.style.width=mouseX+'px';
	}
	else{
		if(mysong.paused);
		var mouseX=e.pageX-bar.offsetLeft;
		var newtime=mouseX*mysong.duration/barSize;
		mysong.currentTime=newtime;
		progressBar.style.width=mouseX+'px';
	
	}
}
function vidmute(){
	if(mysong.muted){
		mysong.muted= false;
		mutebtn.innerHTML="Mute";
	}
	else{
		mysong.pause=true;
		mutebtn.innerHTML="unmute";
	}
}
window.addEventListener('load',doFirst,false);