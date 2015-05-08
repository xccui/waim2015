window.onload = function(){
	parent.document.getElementsByName("main_frame")[0].style.height = "auto";
	var height = document.body.scrollHeight;	
	parent.document.getElementsByName("main_frame")[0].style.height = (height + "px");
}
fixTop = 300;
function setWindowScrollTop(p, id) {
	var topHeight = document.getElementById(id).offsetTop;
	if(p.document.documentElement) {
		p.document.documentElement.scrollTop = topHeight + fixTop;
	}
	if(p.document.body) {
		p.document.body.scrollTop = topHeight + fixTop;
	}
}
