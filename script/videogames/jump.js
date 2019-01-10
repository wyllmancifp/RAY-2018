console.log("Cargando juegos");


// -------------------------------------------------------
// Parámetros de configuración ---------------------------
var htmlEngine = {
	game_canvas : undefined,
	g_canvas_config : {
		c_width : 480,
		c_height : 320
	},
	game_ctx : undefined,
	game_background : undefined,

	/*
	 * Estado -1 : Juego en proceso de carga
	 * Estado  0 : Juego cargado y listo para iniciar la partida
	 * Estado  1 : Ejecutando la partida
	 * Estado  2 : Juego en pausa
	 */
	game_state : -1,
	frame_count : 0
}


var player = {
	score : 0,
	lives : 0,

	width : 0,
	height : 0,

	color : "",

	speedX : 0,
	speedY : 0,

	gravity : 0,
	gravitySpeed : 0,

	current_pos_x : 0,
	current_pos_y : 0,

	init : function (widthIN, heightIN, colorIN, xPosIN, yPosIN, gravityIN) {
		player.score = 0;
		player.lives = 0;
		player.speedX = 0;
		player.speedY = 0;
		player.gravitySpeed = 0;

		player.width = widthIN;
		player.height = heightIN;
		player.color = colorIN;
		player.current_pos_x = xPosIN;
		player.current_pos_y = yPosIN;
		player.gravity = gravityIN;
	},

	draw : function () {
		htmlEngine.game_ctx.fillStyle = player.color;
		htmlEngine.game_ctx.fillRect(player.current_pos_x, 
									 player.current_pos_y, 
									 player.width, 
									 player.height);
	},

	checkCollision : function (xPosIN, yPosIN, widthIN, heightIN) {
		var playerL = player.current_pos_x;
		var playerR = player.current_pos_x + player.width;
		var playerT = player.current_pos_y;
		var playerB = player.current_pos_y + player.height;

		var otherL = xPosIN;
        var otherR = xPosIN + (widthIN);
        var otherT = yPosIN;
        var otherB = yPosIN + (heightIN);

        var collisionDetected = true;
        if ((playerB < otherT) || 
        	(playerT > otherB) || 
        	(playerR < otherL) || 
        	(playerL > otherR)) {
            collisionDetected = false;
        }
        return collisionDetected;

	},

	update : function () {
		if (player.current_pos_y > (htmlEngine.game_canvas.height - player.height)) {
			player.gravitySpeed = 0;
			player.gravity = 0;
			player.current_pos_y -= 1;
		} else {
			player.gravitySpeed += player.gravity;
			//player.current_pos_x += player.speedX;
			player.current_pos_y += player.speedY + player.gravitySpeed;
		}

	}
}

var scorePanel = {
	font_size : "",
	font_name : "",

	color : "",

	pos_x : 0,
	pos_y : 0,

	text : "",

	init : function (sizeIN, fontIN, colorIN, xPosIN, yPosIN) {
		scorePanel.font_size = sizeIN;
		scorePanel.font_name = fontIN;
		scorePanel.color = colorIN;
		scorePanel.pos_x = xPosIN;
		scorePanel.pos_y = yPosIN;
	},

	draw : function () {
		htmlEngine.game_ctx.font = scorePanel.font_size + " " + scorePanel.font_name;
        htmlEngine.game_ctx.fillStyle = scorePanel.color;
        htmlEngine.game_ctx.fillText(scorePanel.text, scorePanel.pos_x, scorePanel.pos_y);
	},

	update : function () {
		scorePanel.text = "Score: " + player.score;
	}
}

var terrain = {
	obstacleA : function (widthIN, heightIN, colorIN, xPosIN, yPosIN) {
		this.width = widthIN;
		this.height = heightIN;
		this.color = colorIN;
		this.xPos = xPosIN;
		this.yPos = yPosIN;
	},

	obstacles : [],
	intervalFrames : 150,

	init : function () {
		terrain.obstacles = [];
		//terrain.addObstacle();
	},

	addObstacle : function () {
		var x = htmlEngine.game_canvas.width;
		var minHeight = 20;
		var maxHeight = 200;
		var height = Math.floor(Math.random()*(maxHeight-minHeight+1)+minHeight);
		var minGap = 50;
		var maxGap = 200;
		var gap = Math.floor(Math.random()*(maxGap-minGap+1)+minGap);

		terrain.obstacles.push(new terrain.obstacleA(10, height, "green", x, 0));
		terrain.obstacles.push(new terrain.obstacleA(10, x - height - gap, "green", x, height + gap));
	},

	checkCollisions : function () {
		for (var i = 0; i < terrain.obstacles.length; ++i) {
			if (player.checkCollision(terrain.obstacles[i].xPos, 
									  terrain.obstacles[i].yPos,
									  terrain.obstacles[i].width, 
									  terrain.obstacles[i].height)) {
				htmlEngine.game_state = 2;
				alert("Game Over");
			}
		}

	},

	draw : function () {
		for (var i = 0; i < terrain.obstacles.length; ++i) {
			htmlEngine.game_ctx.fillStyle = terrain.obstacles[i].color;
            htmlEngine.game_ctx.fillRect(terrain.obstacles[i].xPos, 
            							 terrain.obstacles[i].yPos, 
            							 terrain.obstacles[i].width, 
            							 terrain.obstacles[i].height);
		}
	},

	update : function () {
		for (var i = 0; i < terrain.obstacles.length; ++i) {
			terrain.obstacles[i].xPos -= 1;
		}
	}
}

/*----------------*/
var gui = {
	game_title : "Salto infinito",
	start_msg : "Presione 's' para iniciar",
	pause_msg : "Presione 's' para continuar"
}

var htmlImageObj = undefined;
/*----------------*/

// -------------------------------------------------------
// Funciones de dibujo -----------------------------------
function draw_circle () {
	htmlEngine.game_ctx.beginPath();
	htmlEngine.game_ctx.arc(htmlEngine.g_canvas_config.c_width / 2, 
						htmlEngine.g_canvas_config.c_height / 2, 
						5, 
						0, 
						Math.PI*2);

	htmlEngine.game_ctx.fillStyle = "green";
	htmlEngine.game_ctx.fill();
	htmlEngine.game_ctx.closePath();
}

function draw_image () {
	htmlImageObj = new Image();

	htmlImageObj.onload = function () {
		console.log("Imagen cargada con éxito");
		htmlEngine.game_ctx.drawImage(htmlImageObj, 69, 50);
	};

	htmlImageObj.src = 'https://www.html5canvastutorials.com/demos/assets/darth-vader.jpg';
}

function draw_startMsg () {
	htmlEngine.game_ctx.fillStyle = "black";
	htmlEngine.game_ctx.fillRect((htmlEngine.game_canvas.width / 2) - 100 , 
								 (htmlEngine.game_canvas.height / 2) - 50, 
								 200, 
								 115);
	
	htmlEngine.game_ctx.font = "16px Arial";
	htmlEngine.game_ctx.fillStyle = "white";
	htmlEngine.game_ctx.fillText("Presione 's' para empezar", 
								(htmlEngine.game_canvas.width / 2) - 94, 
								(htmlEngine.game_canvas.height / 2) - 20);
}

function draw_pauseMsg () {
	htmlEngine.game_ctx.fillStyle = "black";
	htmlEngine.game_ctx.fillRect((htmlEngine.game_canvas.width / 2) - 100 , 
								 (htmlEngine.game_canvas.height / 2) - 50, 
								 200, 
								 115);
	
	htmlEngine.game_ctx.font = "16px Arial";
	htmlEngine.game_ctx.fillStyle = "white";
	htmlEngine.game_ctx.fillText("Presione 's' para continuar", 
								(htmlEngine.game_canvas.width / 2) - 94, 
								(htmlEngine.game_canvas.height / 2) - 20);
}


// -------------------------------------------------------
// Manejor de los controles de teclao y ratón ------------
function keyDownHandler(e) {
	//TODO:
	if(e.keyCode == 83) {
		if (htmlEngine.game_state == 2) {
			htmlEngine.game_state = 1;
		} else {
			player.gravity = -0.2;
		}
	}
}

function keyUpHandler(e) {
	//TODO:
	if(e.keyCode == 83) {
		if(htmlEngine.game_state == 1) {
			player.gravity = 0.05;
		}
	}
}

function mouseMoveHandler(e) {
	//TODO:
}



// -------------------------------------------------------
// Proceso de carga -------------------------------------

function loadEngine () {
	console.log("Cargando el canvas...");
	htmlEngine.game_canvas = document.getElementById("gameCanvas");
	htmlEngine.game_canvas.width = htmlEngine.g_canvas_config.c_width;
	htmlEngine.game_canvas.height = htmlEngine.g_canvas_config.c_height;

	htmlEngine.game_ctx = htmlEngine.game_canvas.getContext("2d");
}

function loadControllers () {
	console.log("Cargando los controladores...");
	document.addEventListener("keydown", keyDownHandler, false);
	document.addEventListener("keyup", keyUpHandler, false);
	//document.addEventListener("mousemove", mouseMoveHandler, false);
}

function loadPlayer () {
	console.log("Cargando al jugador...");
	
	player.init(30, 30, "red", 10, 120, 0.05);
}

function loadTerrain () {
	console.log("Cargando el terreno...");
	
	terrain.init();
}

function loadGUI () {
	console.log("Cargando la interfaz de juego...");
	
	scorePanel.init("30px", "Consolas", "black", 280, 40);
	scorePanel.text = "Score: " + player.score;
}

// -------------------------------------------------------
// Flujo de ejecución ------------------------------------
function initGame () {
	console.log("Iniciando...");

	if (htmlEngine.game_state == -1) {
		loadEngine ();
		loadControllers ();
	}

	loadPlayer ();
	loadTerrain ();
	loadGUI ();

	if (htmlEngine.game_state == -1) {
		setInterval(updateGame, 10);
	}
	htmlEngine.game_state = 0;
}

function initState0 () {
	//TODO: - Dibujar un mensaje de bienvenida e instrucciones para comenzar
	htmlEngine.game_ctx.clearRect(0, 
								  0, 
								  htmlEngine.game_canvas.width, 
								  htmlEngine.game_canvas.height);

	draw_startMsg();

	terrain.draw();
	player.draw();
	scorePanel.draw();
	

	//alert("Start Game");

	htmlEngine.game_state = 2; 
	//draw_circle ();
	//draw_image ();
}

function execState1 () {
	if ((htmlEngine.frame_count / terrain.intervalFrames) % 1 == 0) {
		terrain.addObstacle();
		player.score += 1;
	}

	terrain.checkCollisions();

	if(htmlEngine.game_state == 1) {

		terrain.update();
		player.update();
		scorePanel.update();

		htmlEngine.game_ctx.clearRect(0, 
								  0, 
								  htmlEngine.game_canvas.width, 
								  htmlEngine.game_canvas.height);

		terrain.draw();
		player.draw();
		scorePanel.draw();

	}

	htmlEngine.frame_count += 1;
}

function updateGame () {
	if (htmlEngine.game_state > -1) {

		switch (htmlEngine.game_state) {
			case 0:
				initState0 ();
				break;
			case 1:
				execState1 ();
				break;
		}

	}

	//TODO:  - mejorar la tasa de refresco, eliminando la llamanda a 
	//         setinterval de init()
	//       - configurar un valor máximo de frames por segundo
	//requestAnimationFrame(updateGame);
}






