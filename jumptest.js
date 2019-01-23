var game_canvas;
var game_context;

var cloudx;

var startTime;
var currentTime;

var texto = "hola";
var counter = 0;

var loaded = false;

function initGame () {
	if (!loaded) {
		loaded = true;
		game_canvas = document.getElementById("gameCanvas");
		game_context = game_canvas.getContext("2d");
		setInterval(updateGame, 10);
	}
	
	cloudx = game_canvas.width;
}

//var d = new Date();
var initTime = Date.now();
var currentTime = 0;
var currentFPS = 0;
var iddleTime = 250;

function updateGame () {
	currentTime = (Date.now()) - initTime;
	initTime = Date.now();
	iddleTime -= currentTime;
	currentTime /= 1000.0;
	if (iddleTime <= 0) {
		currentFPS = 1 / (currentTime);
		iddleTime = 250;
	}

	game_context.clearRect(0, 0, game_canvas.width, game_canvas.height);
	game_context.fillStyle = "red";
	game_context.fillRect(50, 50, 100, 100);

	game_context.fillStyle = "white";
	cloudx -= 3;
	game_context.fillRect(cloudx, 50, 100, 100);

	game_context.fillStyle = "black";
	game_context.fillRect(game_canvas.width - 200, 0, 200, 30);

	game_context.fillStyle = "white";
	game_context.font = "16px Arial";

	texto = "FPS: " + currentFPS.toFixed(2);
	game_context.fillText(texto, game_canvas.width - 200, 15);

}