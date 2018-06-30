// LCD game JavaScript library
// Bas de Reuver (c)2018

var MENU_HTML = 
		'<div class="container">' +
		'  <canvas id="mycanvas" class="gamecvs" width="400" height="300"></canvas>' +
		'  <a class="mybutton btnmenu">info</a>' +
		'  <a class="mybutton btnmenu" onclick="displayInfobox();">help</a>' +
		'  <div class="infobox" id="infobox">' +
		'    <div>' +
		'      <h1>test123</h1>' +
		'      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' +
		'    </div>' +
		'    <a class="mybutton btnpop" onclick="hideInfobox();">Ok</a>' +
		'  </div>' +
		'</div>';;


function displayInfobox() {
	hideScorebox();
	document.getElementById("infobox").style.display = "inherit";
	//event.stopPropagation(); // stop propagation on button click event
}

function hideInfobox() {
	var target = event.target || event.srcElement;
	// filter event handling when the event bubbles
	if (event.currentTarget == target) {
		document.getElementById("infobox").style.display = "none";
	}
}

// -------------------------------------
// menu overlay object
// -------------------------------------
LCDGame.Menu = function (lcdgame, name) {
	// save reference to game object 
	this.lcdgame = lcdgame;
};
